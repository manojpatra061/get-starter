## 1. Thinks To Know For Better Understanding
If `"type": "module"` in `package.json` it will treat all `.js` files as ESM. Since we want **tsup** to transpile our code into both ESM and CommonJS, in dist it will create `.cjs` file (not `.mjs`) along with `.js` file. Why? `.js` is our ESM file because of `"type": "module"`.

Same for `"type": "commonjs"` → **tsup** will not create `.cjs` instead it will create `.mjs` as `.js` is our CommonJS now.

`npm run build` to build the files needed for an npm package in `dist` folder.


## 2. Getting Started
```bash
npm adduser
npm whoami
```
## 3. Publishing The Package
When you have finished writing code for your package. You want to publish it into npm registrar.

Before publishing a package it's a good practice to check what will be published.
`npm pack --dry-run` → will show Tarball Contents. Add files in `.npmignore` to ignore.

```bash
npm run build
npm pack --dry-run
npm publish
```