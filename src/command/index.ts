import { Rule, Source } from '@angular-devkit/schematics';

import { CommandOptions } from './command-options.interface.js';
import { CommonSchematicFactory } from '../common/index.js';
import { CommandType } from './command-type.enum.js';

class CommandSchematicFactory extends CommonSchematicFactory<CommandOptions> {
	public type = 'command';

	generate(options: CommandOptions): Source {
		switch (options.strategy) {
			case CommandType.TEXT_COMMAND:
				this.templatePath = './files/text-command';
				break;
			case CommandType.SLASH_COMMAND:
				this.templatePath = './files/slash-command';
				break;
		}

		return super.generate(options);
	}
}

export function command(options: CommandOptions): Rule {
	const commandFactory = new CommandSchematicFactory();
	return commandFactory.create(options);
}
