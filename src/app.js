import fs from 'fs';
import path from 'path';

function isDirectory(directory) {
    try {
        return fs.statSync(directory).isDirectory();
    } catch (err) {
        return false;
    }
}

const DirTree = (root, showFile = false) => {
    root = path.resolve(root);
    let dirTree = {path: root, sub: []};
    if (!isDirectory(root)) {
        return dirTree;
    }
    fs.readdirSync(root)
        .map(dir => `${root}/${dir}`)
        .filter(dir => showFile || isDirectory(dir))
        .forEach(dir => {
            dirTree.sub.push(DirTree(dir, showFile));
        });

    return dirTree;
};


export default DirTree;
