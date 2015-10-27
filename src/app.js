import fs from 'fs';
import path from 'path';


const DirTree = (root, showFile = false) => {
    root = path.resolve(root);
    let dirTree = {path: root, sub: []};
    if (!fs.statSync(root).isDirectory()) {
        return dirTree;
    }
    fs.readdirSync(root)
        .map(dir => `${root}/${dir}`)
        .filter(dir => showFile || fs.statSync(dir).isDirectory())
        .forEach(dir => {
            dirTree.sub.push(DirTree(dir, showFile));
        });

    return dirTree;
};


export default DirTree;
