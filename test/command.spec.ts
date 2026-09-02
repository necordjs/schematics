import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'node:path';

import { CommandOptions } from '../src/command/command-options.interface.js';
import { CommandType } from '../src/command/command-type.enum.js';

describe('Command Factory', () => {
	const runner: SchematicTestRunner = new SchematicTestRunner('.', join(process.cwd(), 'src/collection.json'));

	it('should generate a text command', async () => {
		const options: CommandOptions = {
			name: 'Text',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: CommandType.TEXT_COMMAND
		};

		const tree = await runner.runSchematic('command', options);

		expect(tree.files).toEqual(['/text/text.commands.ts']);
		expect(tree.readContent('/text/text.commands.ts')).toContain("@TextCommand({\n        name: 'text'");
	});

	it('should generate a slash command', async () => {
		const options: CommandOptions = {
			name: 'Slash',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: CommandType.SLASH_COMMAND
		};

		const tree = await runner.runSchematic('command', options);

		expect(tree.files).toEqual(['/slash/slash.commands.ts']);
		expect(tree.readContent('/slash/slash.commands.ts')).toContain("@SlashCommand({\n        name: 'slash'");
	});
});
