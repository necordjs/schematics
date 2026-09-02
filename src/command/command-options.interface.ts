import { CommandType } from './command-type.enum.js';
import { CommonOptions } from '../common/index.js';

export interface CommandOptions extends CommonOptions {
	strategy: CommandType;
}
