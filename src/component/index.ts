import { CommonSchematicFactory } from '../common';
import { Rule, Source } from '@angular-devkit/schematics';
import { ComponentOptions } from './component-options.interface';
import { ComponentType } from './component-type.enum';

class ComponentSchematicFactory extends CommonSchematicFactory<ComponentOptions> {
	public type = 'component';

	generate(options: ComponentOptions): Source {
		switch (options.strategy) {
			case ComponentType.Button:
				this.templatePath = './files/button';
				break;
			case ComponentType.Select:
				this.templatePath = './files/select';
				break;
		}

		return super.generate(options);
	}
}

export function component(options: ComponentOptions): Rule {
	const commandFactory = new ComponentSchematicFactory();
	return commandFactory.create(options);
}
