import { CommandType } from './command-type.enum';
import { CommonOptions } from '../common';

export interface CommandOptions extends CommonOptions {
	strategy: CommandType;
}
