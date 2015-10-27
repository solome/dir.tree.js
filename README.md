

## dir.tree

Get tree object with a directory, example:

```js
{ path: '/Users/solome/dir.tree.js/src',
  sub:
    [
      { path: '/Users/solome/dir.tree.js/src/app.js',
        sub: [] },
      { path: '/Users/solome/dir.tree.js/src/debug.js',
        sub: [] }
    ]
}
```

### Installation

```
npm install -g dir.tree.js
```

### Usage

Node

```js
import DirTree from 'dir.tree.js';

const path = __dirname;

const dirTree = DirTree(path);

```

Commander: list contents of directories in a tree-like format.

```bash
$ dt -s
```

Output demo:

```bash
.
|____dir
| |____subdir
| | |____empty.file
|____dirtree.js

```

## License

MIT

