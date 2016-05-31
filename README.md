

## dir.tree

[![Build Status](https://travis-ci.org/solome/dir.tree.js.svg)](https://travis-ci.org/solome/dir.tree.js)
[![NPM Version](http://img.shields.io/npm/v/dir.tree.js.svg?style=flat)](https://www.npmjs.com/package/dir.tree.js)

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
import DirTree from 'dir.tree.js'

const path = __dirname

const dirTree = DirTree(path)

```

Commander: list contents of directories in a tree-like format.

```bash
$ dt -s
```

Output demo:

```bash
.
├── dir
|   └── subdir
|       └── empty.file
└── dirtree.js

```

## License

MIT

