// test/integration/controllers/UserController.test.js
var supertest = require('supertest');

describe('UserController.login', function() {

  describe('#login()', function() {
    it('should redirect to /my/page', function (done) {
      supertest(sails.hooks.http.app)
        .post('/user/login')
        .send({ name: 'test', password: 'test' })
        .expect(302)
        .expect('location','/my/page', done);
    });
  });

});
