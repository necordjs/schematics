import { ContextMenuType } from './context-menu-type.enum';
import { CommonOptions } from '../common';

export interface ContextMenuOptions extends CommonOptions {
	strategy: ContextMenuType;
}
