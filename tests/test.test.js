const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const { test } = require('../services/test.service');
const { expect } = chai;

chai.use(chaiHttp);

describe("Test Service methods", () => {
  it("should return message from test method", (done) => {
    const testResult = test();

    expect(testResult).to.be.a("string");
    expect(testResult).is.equal('Test Working');
    
    done();
  });
});

describe("Test API testing", () => {
  it("should return 200 OK and message from GET /test", (done) => {
    chai.request(server)
          .get('/test')
          .end((err, res) => {
              if(err) {
                throw err;
              }

              expect(res).to.be.status(200);
              expect(res.body.message).is.equal('Test Working');
              done();
          });
  });
});
