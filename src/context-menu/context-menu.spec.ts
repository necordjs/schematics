import { describe } from 'node:test';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { ContextMenuOptions } from './context-menu-options.interface';
import { ContextMenuType } from './context-menu-type.enum';

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

		const tree = await runner.runSchematicAsync('context-menu', options).toPromise();

		expect(tree.files).toEqual(['/message/message.commands.ts']);
	});

	it('should generate a user context menu', async () => {
		const options: ContextMenuOptions = {
			name: 'User',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ContextMenuType.User
		};

		const tree = await runner.runSchematicAsync('context-menu', options).toPromise();

		expect(tree.files).toEqual(['/user/user.commands.ts']);
	});
});
