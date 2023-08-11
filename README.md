<div align="center">
   <h1>
       <a href="#"><img src="https://necord.org/img/logo.png"></a>
   </h1>
  📜 A collection of schematics for Necord projects with NestJS <b><a href="https://discord.com/">Discord</a> bots</b> using <a href="https://nestjs.com">NestJS</a>, based on <a href="https://discord.js.org/">Discord.js</a>
   <br/><br/>
   <a href="https://necord.org">Documentation ✨</a> &emsp; <a href="https://github.com/SocketSomeone/necord">Source code 🪡</a> &emsp; <a href="https://github.com/necordjs/samples">Examples 🛠️</a> &emsp; <a href="https://discord.gg/mcBYvMTnwP">Community 💬</a>
</div>


<br/>

<p align="center">
    <a href='https://img.shields.io/npm/v/necord'><img src="https://img.shields.io/npm/v/necord" alt="NPM Version" /></a>
    <a href='https://img.shields.io/npm/l/necord'><img src="https://img.shields.io/npm/l/necord" alt="NPM License" /></a>
    <a href='https://img.shields.io/npm/dm/necord'><img src="https://img.shields.io/npm/dm/necord" alt="NPM Downloads" /></a>
    <a href='https://img.shields.io/github/last-commit/necordjs/necord'><img src="https://img.shields.io/github/last-commit/SocketSomeone/necord" alt="Last commit" /></a>
</p>

### Installation

```bash
npm i -D @necord/schematics
```

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
yarn build
schematics .:command
```

### Unit Testing

`npm run test` will run the unit tests, using Jest as a runner and test framework.

That's it!
