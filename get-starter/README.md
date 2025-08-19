## 1. Getting Started
```bash
npm adduser
npm whoami
```
---
## 2. Publishing The Package
When you have finished writing code for your package. You want to publish it into npm registrar.

But first bundle your code using `npm run build` to build the files in `dist` folder.

Before publishing a package it's a good practice to check what will be published.
`npm pack --dry-run` → will show Tarball Contents. Add files in `.npmignore` to ignore.

```bash
npm run build
npm pack --dry-run
npm publish
```
---