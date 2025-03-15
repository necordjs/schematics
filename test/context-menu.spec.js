"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const testing_1 = require("@angular-devkit/schematics/testing");
const path_1 = require("path");
const context_menu_type_enum_1 = require("./context-menu-type.enum");
(0, node_test_1.describe)('Context Menu Factory', () => {
    const runner = new testing_1.SchematicTestRunner('.', (0, path_1.join)(process.cwd(), 'src/collection.json'));
    it('should generate a message context menu', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = {
            name: 'Message',
            flat: false,
            sourceRoot: '',
            spec: false,
            strategy: context_menu_type_enum_1.ContextMenuType.Message
        };
        const tree = yield runner.runSchematicAsync('context-menu', options).toPromise();
        expect(tree.files).toEqual(['/message/message.commands.ts']);
    }));
    it('should generate a user context menu', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = {
            name: 'User',
            flat: false,
            sourceRoot: '',
            spec: false,
            strategy: context_menu_type_enum_1.ContextMenuType.User
        };
        const tree = yield runner.runSchematicAsync('context-menu', options).toPromise();
        expect(tree.files).toEqual(['/user/user.commands.ts']);
    }));
});
