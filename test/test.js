var request = require('supertest');
var app = require('../index');

describe('node-app', () => {
    after(() => {
        require('./../index').stop();
    })

    describe('GET /', function() {
        it('respond with hello nikki1', (done) => {
            //navigate to root and check the response is "hello world"
            request(app).get('/').expect('hello nikki1').end(done);
        });
    });
})