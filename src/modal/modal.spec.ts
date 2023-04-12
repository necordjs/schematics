import { describe } from 'node:test';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { CommonOptions } from '../common';

describe('Modal Factory', () => {
	const runner: SchematicTestRunner = new SchematicTestRunner('.', join(process.cwd(), 'src/collection.json'));

	it('should generate a modal', async () => {
		const options: CommonOptions = {
			name: 'Modal',
			flat: false,
			sourceRoot: '',
			spec: false
		};

		const tree = await runner.runSchematicAsync('modal', options).toPromise();

		expect(tree.files).toEqual(['/modal/modal.modals.ts']);
	});
});
