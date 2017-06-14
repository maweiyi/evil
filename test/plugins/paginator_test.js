const assert = require('assert');
const request = require('supertest');
var ctx = {
    page: {
        base: 'archives/'
    },
    config: {
        root: '/'
    }

};
ctx.url_for = require('../../plugins/url_for').bind(ctx);
var paginator = require('../../plugins/paginator').bind(ctx);

describe('All result', function () {
    it('should return this result!', function () {
        assert.equal([
            '<a class="extend prev" rel="prev" href="/archives/"><i class="icon-angle-left"></i></a>',
            '<a class="page-number" href="/archives/">1</a>',
            '<span class="page-number current">2</span>',
            '<a class="page-number" href="/archives/page/3/">3</a>',
            '<span class="space">&hellip;</span>',
            '<a class="page-number" href="/archives/page/30/">30</a>',
            '<a class="extend next" rel="next" href="/archives/page/3/"><i class="icon-angle-right"></i></a>'

        ].join(''), paginator({
            current: 2,
            format: 'page/%d/',
            total: 30,
            prev_text: '<i class="icon-angle-left"></i>',
            next_text: '<i class="icon-angle-right"></i>',
            mid_size: 1
        }))
    })
});