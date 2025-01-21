import { describe } from 'node:test';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { ComponentOptions } from './component-options.interface';
import { ComponentType } from './component-type.enum';

describe('Component Factory', () => {
	const runner: SchematicTestRunner = new SchematicTestRunner('.', join(process.cwd(), 'src/collection.json'));

	it('should generate button', async () => {
		const options: ComponentOptions = {
			name: 'Button',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ComponentType.Button
		};

		const tree = await runner.runSchematicAsync('component', options).toPromise();

		expect(tree.files).toEqual(['/button/button.components.ts']);
	});

	it('should generate select', async () => {
		const options: ComponentOptions = {
			name: 'Select',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ComponentType.Select
		};

		const tree = await runner.runSchematicAsync('component', options).toPromise();

		expect(tree.files).toEqual(['/select/select.components.ts']);
	});
});
