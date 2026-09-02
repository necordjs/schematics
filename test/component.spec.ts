import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'node:path';

import { ComponentOptions } from '../src/component/component-options.interface.js';
import { ComponentType } from '../src/component/component-type.enum.js';

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

		const tree = await runner.runSchematic('component', options);

		expect(tree.files).toEqual(['/button/button.components.ts']);
		expect(tree.readContent('/button/button.components.ts')).toContain("@Button('button')");
	});

	it('should generate select', async () => {
		const options: ComponentOptions = {
			name: 'Select',
			flat: false,
			sourceRoot: '',
			spec: false,
			strategy: ComponentType.Select
		};

		const tree = await runner.runSchematic('component', options);

		expect(tree.files).toEqual(['/select/select.components.ts']);
		expect(tree.readContent('/select/select.components.ts')).toContain("@SelectMenu('select')");
	});
});
