import { CommonOptions } from '../common';
import { CommandType } from './command-type.enum';

export interface CommandOptions extends CommonOptions {
	strategy: CommandType;
}
