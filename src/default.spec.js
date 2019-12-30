const { expect } = require('chai');
const request = require('supertest');

const { createExpressTestApp } = require('../test/tests-utils');
const { HTTP_NOT_FOUND } = require('./constants/http.constants');

const ENDPOINT = '/non-existing-route';

describe('Default router tests', () => {
    let app = null;

    before('Initialize Express App', async () => {
        app = createExpressTestApp(null, { endpoint: ENDPOINT });
    });

    describe(`GET ${ENDPOINT}/`, () => {
        let response = {};

        before('API Call', async () => {
            response = await request(app)
                .get(ENDPOINT)
                .set('Content-type', 'application/json; charset=utf-8');
        });

        it('should send back an HTTP 404 Not Found response', () => {
            expect(response).to.have.property('status').that.equal(HTTP_NOT_FOUND);
        });
    });
});
