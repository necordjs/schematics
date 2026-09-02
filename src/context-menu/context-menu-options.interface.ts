import { ContextMenuType } from './context-menu-type.enum.js';
import { CommonOptions } from '../common/index.js';

export interface ContextMenuOptions extends CommonOptions {
	strategy: ContextMenuType;
}
