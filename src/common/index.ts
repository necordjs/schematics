import { Path, strings } from '@angular-devkit/core';
import {
	apply,
	applyTemplates,
	branchAndMerge,
	chain,
	filter,
	mergeWith,
	move,
	noop,
	Rule,
	SchematicContext,
	SchematicsException,
	Source,
	Tree,
	url
} from '@angular-devkit/schematics';
import {
	DeclarationOptions,
	Location,
	mergeSourceRoot,
	ModuleDeclarator,
	ModuleFinder,
	NameParser
} from '@nestjs/schematics';
import { join } from 'path';
import { CommonOptions } from './common-options.interface';

export * from './common-options.interface';

export class CommonSchematicFactory<T extends CommonOptions = CommonOptions> {
	public templatePath = './files';
	public type = 'service';
	public metadata = 'providers';

	public create(options: T): Rule {
		options = this.transform(options);
		return branchAndMerge(
			chain([mergeWith(this.generate(options)), this.addDeclarationToModule(options), mergeSourceRoot(options)])
		);
	}

	public generate(options: T): Source {
		console.log(url(join(this.templatePath as Path)));
		return (context: SchematicContext) =>
			apply(url(join(this.templatePath as Path)), [
				options.spec ? noop() : filter((path: string) => !path.endsWith('.spec.ts')),
				applyTemplates({
					...strings,
					...options,
					lowercase: (str: string) => str.toLowerCase()
				}),
				move(options.path ?? '')
			])(context);
	}

	public addDeclarationToModule(options: T): Rule {
		return (tree: Tree) => {
			options.module = new ModuleFinder(tree).find({
				name: options.name,
				path: options.path as Path
			});
			if (options.module === undefined || options.module === null) {
				return tree;
			}
			const rawContent = tree.read(options.module);
			const content = rawContent?.toString() ?? '';
			const declarator: ModuleDeclarator = new ModuleDeclarator();
			tree.overwrite(options.module, declarator.declare(content, options as DeclarationOptions));
			return tree;
		};
	}

	public transform(source: T): T {
		const target: T = Object.assign({}, source);
		target.metadata = this.metadata;
		target.type = this.type;

		if (target.name === null || target.name === undefined) {
			throw new SchematicsException('Option (name) is required.');
		}
		const location: Location = new NameParser().parse(target);
		target.name = strings.dasherize(location.name);
		target.path = strings.dasherize(location.path);

		target.path = target.flat ? target.path : join(target.path as Path, target.name);
		return target;
	}
}
