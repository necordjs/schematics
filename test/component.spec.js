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
const component_type_enum_1 = require("./component-type.enum");
(0, node_test_1.describe)('Component Factory', () => {
    const runner = new testing_1.SchematicTestRunner('.', (0, path_1.join)(process.cwd(), 'src/collection.json'));
    it('should generate button', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = {
            name: 'Button',
            flat: false,
            sourceRoot: '',
            spec: false,
            strategy: component_type_enum_1.ComponentType.Button
        };
        const tree = yield runner.runSchematicAsync('component', options).toPromise();
        expect(tree.files).toEqual(['/button/button.components.ts']);
    }));
    it('should generate select', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = {
            name: 'Select',
            flat: false,
            sourceRoot: '',
            spec: false,
            strategy: component_type_enum_1.ComponentType.Select
        };
        const tree = yield runner.runSchematicAsync('component', options).toPromise();
        expect(tree.files).toEqual(['/select/select.components.ts']);
    }));
});
