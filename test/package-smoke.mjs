import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing/index.js';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';
import { join } from 'node:path';

const projectRoot = process.cwd();
const temporaryDirectory = mkdtempSync(join(projectRoot, '.package-smoke-'));

const cases = [
	{
		name: 'command',
		options: { flat: false, name: 'Ping', sourceRoot: '', spec: false, strategy: 'slash-command' },
		path: '/ping/ping.commands.ts',
		content: "@SlashCommand({\n        name: 'ping'"
	},
	{
		name: 'component',
		options: { flat: false, name: 'Confirm', sourceRoot: '', spec: false, strategy: 'button' },
		path: '/confirm/confirm.components.ts',
		content: "@Button('confirm')"
	},
	{
		name: 'context-menu',
		options: { flat: false, name: 'Inspect', sourceRoot: '', spec: false, strategy: 'user' },
		path: '/inspect/inspect.commands.ts',
		content: "@UserCommand({ name: 'inspect' })"
	},
	{
		name: 'modal',
		options: { flat: false, name: 'Profile', sourceRoot: '', spec: false },
		path: '/profile/profile.modals.ts',
		content: "@Modal('profile')"
	}
];

try {
	const packResult = JSON.parse(
		execFileSync('npm', ['pack', '--json', '--pack-destination', temporaryDirectory], {
			cwd: projectRoot,
			encoding: 'utf8'
		})
	);
	const tarball = join(temporaryDirectory, packResult[0].filename);
	execFileSync('tar', ['-xzf', tarball, '-C', temporaryDirectory]);

	const packageRoot = join(temporaryDirectory, 'package');
	const manifest = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'));
	assert.equal(manifest.type, 'module');
	assert.equal(manifest.main, './dist/index.js');
	assert.equal(manifest.types, './dist/index.d.ts');
	assert.equal(manifest.schematics, './dist/collection.json');

	const entrypoint = await import(pathToFileURL(join(packageRoot, manifest.main)).href);
	assert.equal(typeof entrypoint.command, 'function');
	assert.match(readFileSync(join(packageRoot, manifest.types), 'utf8'), /command/);

	const nodeModules = join(temporaryDirectory, 'node_modules', '@necord');
	mkdirSync(nodeModules, { recursive: true });
	symlinkSync(packageRoot, join(nodeModules, 'schematics'));
	execFileSync(process.execPath, ['--input-type=module', '--eval', "await import('@necord/schematics')"], {
		cwd: temporaryDirectory,
		stdio: 'inherit'
	});
	execFileSync(process.execPath, ['--eval', "require('@necord/schematics')"], {
		cwd: temporaryDirectory,
		stdio: 'inherit'
	});

	const typescript = await import('typescript');
	assert.match(typescript.version, /^6\./);
	assert.ok(typescript.ScriptTarget);
	await import('@nestjs/schematics');

	const collectionPath = join(packageRoot, 'dist/collection.json');
	const runner = new SchematicTestRunner('@necord/schematics', collectionPath);

	for (const testCase of cases) {
		const tree = await runner.runSchematic(testCase.name, testCase.options);
		assert.deepEqual(tree.files, [testCase.path]);
		assert.match(
			tree.readContent(testCase.path),
			new RegExp(testCase.content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
		);
	}

	console.log(`Packed collection smoke passed for ${cases.length} schematics.`);
} finally {
	rmSync(temporaryDirectory, { force: true, recursive: true });
}
