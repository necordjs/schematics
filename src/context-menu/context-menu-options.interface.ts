import { CommonOptions } from '../common';
import { ContextMenuType } from './context-menu-type.enum';

export interface ContextMenuOptions extends CommonOptions {
	'context-menu-type': ContextMenuType;
}
