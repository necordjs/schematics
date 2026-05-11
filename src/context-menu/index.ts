import { Rule, Source } from '@angular-devkit/schematics';

import { ContextMenuOptions } from './context-menu-options.interface';
import { ContextMenuType } from './context-menu-type.enum';
import { CommonSchematicFactory } from '../common';

class ContextMenuSchematicFactory extends CommonSchematicFactory<ContextMenuOptions> {
	public type = 'context-menu';

	generate(options: ContextMenuOptions): Source {
		switch (options.strategy) {
			case ContextMenuType.Message:
				this.templatePath = './files/message-menu';
				break;
			case ContextMenuType.User:
				this.templatePath = './files/user-menu';
				break;
		}

		return super.generate(options);
	}
}

export function contextMenu(options: ContextMenuOptions): Rule {
	const contextMenuFactory = new ContextMenuSchematicFactory();
	return contextMenuFactory.create(options);
}
