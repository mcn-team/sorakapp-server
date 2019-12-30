const { expect } = require('chai');
const request = require('supertest');

const { createExpressTestApp } = require('../../../test/tests-utils');
const { HTTP_OK } = require('../../constants/http.constants');
const healthCheckRouter = require('./health-checks.routes');

const ENDPOINT = '/test/health-checks';

describe('Health Checks integration tests', () => {
    let app = null;

    before('Initialize Express App', async () => {
        app = createExpressTestApp(healthCheckRouter, { endpoint: ENDPOINT });
    });

    describe(`GET ${ENDPOINT}/`, () => {
        let response = null;

        before('API Call', async () => {
            response = await request(app)
                .get(ENDPOINT)
                .set('Content-type', 'application/json; charset=utf-8');
        });

        it('should send back an HTTP 200 OK response', () => {
            expect(response)
                .to.have.property('status')
                .that.equal(HTTP_OK);
        });

        it('should send back an object with isAlive boolean property', () => {
            expect(response)
                .to.have.property('body')
                .that.is.an('object')
                .that.have.property('isAlive')
                .that.equal(true);
        });
    });

    describe(`GET ${ENDPOINT}/db`, () => {
        let response = null;

        before('API Call', async () => {
            response = await request(app)
                .get(`${ENDPOINT}/db`)
                .set('Content-type', 'application/json; charset=utf-8');
        });

        it('should send back an HTTP 200 OK response', () => {
            expect(response)
                .to.have.property('status')
                .that.equal(HTTP_OK);
        });

        it('should send back an array', () => {
            expect(response)
                .to.have.property('body')
                .that.is.an('array');
        });
    });
});
