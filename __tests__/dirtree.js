jest.dontMock('../build/app.js');

describe('DirTree', function() {
    it('Get tree obj of dir', function() {
        const DirTree = require('../build/app.js').default;
        const treeObj = DirTree(__dirname, true);
        expect(treeObj.path).toEqual(__dirname);
        expect(treeObj.sub[0].path).toEqual(__dirname + '/dir');
        expect(treeObj.sub[0].sub[0].path).toEqual(__dirname + '/dir/subdir');
        expect(treeObj.sub[0].sub[0].sub[0].path).toEqual(__dirname + '/dir/subdir/empty.file');
        expect(treeObj.sub[1].path).toEqual(__dirname + '/dirtree.js');
    });
});
