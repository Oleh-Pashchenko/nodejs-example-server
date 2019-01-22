const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const { index } = require('../services/index.service');

const { expect } = chai;

chai.use(chaiHttp);


describe('Index service test', () => {
    it('should return message from index', () => {
        const indexResult = index();

        expect(indexResult).to.be.a('string');
        expect(indexResult).is.equal('Working');

    // done();
    });
});

describe('Index API testing', () => {
    it('should return 200 OK and message from GET /', () => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) {
                    throw err;
                }

                expect(res).to.be.status(200);
                expect(res.body.message).is.equal('Working');

                // done();
            });
    });
});

