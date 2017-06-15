const assert = require('assert');
const request = require('supertest');

var ctx = {
    config: {
        root: '/'
    }
};

ctx.url_for = require('../../plugins/url_for').bind(ctx);

describe('URL', function () {
    it('return the url', function () {
        assert.equal('/index', ctx.url_for('index'));
    })
});

