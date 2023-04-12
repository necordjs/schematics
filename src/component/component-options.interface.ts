import { CommonOptions } from '../common';
import { ComponentType } from './component-type.enum';

export interface ComponentOptions extends CommonOptions {
	strategy: ComponentType;
}
