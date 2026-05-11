import { ComponentType } from './component-type.enum';
import { CommonOptions } from '../common';

export interface ComponentOptions extends CommonOptions {
	strategy: ComponentType;
}
