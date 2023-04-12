import { CommonSchematicFactory } from '../common';
import { ContextMenuOptions } from './context-menu-options.interface';
import { Rule, Source } from '@angular-devkit/schematics';
import { ContextMenuType } from './context-menu-type.enum';
import * as path from 'path';

class ContextMenuSchematicFactory extends CommonSchematicFactory<ContextMenuOptions> {
	public type = 'context-menu';

	generate(options: ContextMenuOptions): Source {
		switch (options['context-menu-type']) {
			case ContextMenuType.Message:
				this.templatePath = path.join(__dirname, './files/message-menu');
				break;
			case ContextMenuType.User:
				this.templatePath = path.join(__dirname, './files/user-menu');
				break;
		}

		return super.generate(options);
	}
}

export function contextMenu(options: ContextMenuOptions): Rule {
	const contextMenuFactory = new ContextMenuSchematicFactory();
	return contextMenuFactory.create(options);
}
