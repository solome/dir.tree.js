jest.dontMock('..');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var DirTree = require('..');
        console.log(DirTree('./__tests__'));
        expect(directory('.')).toBe(3);
    });
});
