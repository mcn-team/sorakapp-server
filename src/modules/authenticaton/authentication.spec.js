const { expect } = require('chai');
const request = require('supertest');
const mongoose = require('mongoose');

const { createExpressTestApp } = require('../../../test/tests-utils');
const authenticationRouter = require('./authentication.routes');
const { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED, HTTP_OK, HTTP_CONFLICT } = require('../../constants/http.constants');

const ENDPOINT = '/test';
const User = mongoose.model('User');

//main group
describe('Authentication integration tests', () => {
    let app = null;

    //init test app
    before('Initialize Express App', async () => {
        app = createExpressTestApp(authenticationRouter, { endpoint: ENDPOINT });
    });

    //login tests
    describe(`GET ${ENDPOINT}/login`, () => {
        let response = null;

        context('When parameter is incorrect', () => {
            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/login`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'test',
                        password: 'test'
                    });
            });

            it('should send back a bad request status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_BAD_REQUEST);
            });
        });

        context('When user does not exist', () => {
            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/login`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'testtest',
                        password: 'testtest'
                    });
            });

            it('should send back a HTTP_UNAUTHORIZED status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_UNAUTHORIZED);
            });
        });

        context('When user exists', () => {
            before('FILL DATABASE', async () => {
                const testUser = new User({
                    username: 'aldramar',
                    password: 'lockedin',
                    role: 'CLIENT'
                });

                await testUser.save();
            });

            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/login`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'aldramar',
                        password: 'lockedin'
                    });
            });

            it('should send back a HTTP_OK status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_OK);
            });

            after('deleting test data', async () => {
                await User.deleteMany();
            });
        });
    });

    //register tests
    describe(`GET ${ENDPOINT}/register`, () => {
        let response = null;

        context('When parameter is incorrect', () => {
            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/register`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'test',
                        password: 'test',
                        role: 'test'
                    });
            });

            it('should send back a bad request status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_BAD_REQUEST);
            });
        });

        context('When user already exists', () => {
            before('FILL DATABASE', async () => {
                const testUser = new User({
                    username: 'testtest',
                    password: 'testtest',
                    role: 'CLIENT'
                });

                await testUser.save();
            });

            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/register`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'testtest',
                        password: 'testtest',
                        role: 'CLIENT'
                    });
            });

            it('should send back a HTTP_CONFLICT status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_CONFLICT);
            });

            after('deleting test data', async () => {
                await User.deleteMany();
            });
        });

        context('When user is created', () => {
            before('API CALL', async () => {
                response = await request(app)
                    .post(`${ENDPOINT}/register`)
                    .set('Content-type', 'application/json; charset=utf-8')
                    .send({
                        username: 'testtest',
                        password: 'testtest',
                        role: 'CLIENT'
                    });
            });

            it('should send back a HTTP_OK status', () => {
                expect(response)
                    .to.have.property('status')
                    .that.equal(HTTP_OK);
            });

            after('deleting test data', async () => {
                await User.deleteMany();
            });
        });
    });
});
