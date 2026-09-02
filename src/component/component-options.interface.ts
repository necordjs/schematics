import { ComponentType } from './component-type.enum.js';
import { CommonOptions } from '../common/index.js';

export interface ComponentOptions extends CommonOptions {
	strategy: ComponentType;
}
