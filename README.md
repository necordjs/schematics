# @necord/schematics

This is a collection of schematics for Necord projects.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command
line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a
debug mode.

```bash
npm i -g @angular-devkit/schematics-cli
```

Check the documentation with

```bash
schematics --help
```

Now you can execute generation commands.

```bash
schematics @necord/schematics:slash-command
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

That's it!
