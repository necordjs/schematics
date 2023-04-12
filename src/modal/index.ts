import { CommonOptions, CommonSchematicFactory } from '../common';
import { Rule, Source } from '@angular-devkit/schematics';

class ModalSchematicFactory extends CommonSchematicFactory<CommonOptions> {
	public type = 'modal';

	generate(options: CommonOptions): Source {
		return super.generate(options);
	}
}

export function modal(options: CommonOptions): Rule {
	const modalFactory = new ModalSchematicFactory();
	return modalFactory.create(options);
}
