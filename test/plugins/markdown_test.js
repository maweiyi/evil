const assert = require('assert');
const request = require('supertest');

var ctx = {
    config: {
        marked: {}
    }
};
var r = require('hexo-renderer-marked').bind(ctx);
describe("Markdown", function () {
    it("default", function () {
        var body = [
            '# Hello world',
            '',
            '```',
            code,
            '```',
            '',
            '## Hello world',
            '',
            'hello'
        ].join('\n');
        var result = r({text: body});
        console.log(result);

    })
});