const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

describe('GET /index', function () {
    it('response index', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});