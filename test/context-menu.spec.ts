import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'node:path';

import { ContextMenuOptions } from '../src/context-menu/context-menu-options.interface.js';
import { ContextMenuType } from '../src/context-menu/context-menu-type.enum.js';

describe('Context Menu Factory', () => {
	const runner: SchematicTestRunner = new SchematicTestRunner('.', join(process.cwd(), 'src/collection.json'));

	it('should generate a message context menu', async () => {
		const options: ContextMenuOptions = {
			name: 'Message',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ContextMenuType.Message
		};

		const tree = await runner.runSchematic('context-menu', options);

		expect(tree.files).toEqual(['/message/message.commands.ts']);
		expect(tree.readContent('/message/message.commands.ts')).toContain("@MessageCommand({ name: 'message' })");
	});

	it('should generate a user context menu', async () => {
		const options: ContextMenuOptions = {
			name: 'User',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ContextMenuType.User
		};

		const tree = await runner.runSchematic('context-menu', options);

		expect(tree.files).toEqual(['/user/user.commands.ts']);
		expect(tree.readContent('/user/user.commands.ts')).toContain("@UserCommand({ name: 'user' })");
	});
});
