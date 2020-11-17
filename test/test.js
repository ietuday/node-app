var request = require('supertest');
var app = require('../index');

describe('node-app', () => {
    after(() => {
        require('./../index').stop();
    })

    describe('GET /', function() {
        it('respond with hello nikki123', (done) => {
            //navigate to root and check the response is "hello world"
            request(app).get('/').expect('hello nikki123').end(done);
        });
    });
})