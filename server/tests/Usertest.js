import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import pkg from 'mocha';
const { describe, it } = pkg;
import server from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistingRoute = () => {
  describe('testingNonExistingRoute', () => {
    it('HTTP call against a route that does not exist in the API', done => {
      Chai.request(server)
        .get('/boll')
        .end((request, response) => {
          response.should.have.a.status(404)
          done()
        })
    })
  })
}

const getAllUsers = () => {
  it('Expecting a return of all users in database', done => {
    Chai.request(server)
      .get('/user')
      .end((request, response) => {
        response.should.have.a.status(200)
        response.body.should.be.a('array')
        done()
      })
  })
}

describe('TESTING THE USER API ENTITY', () => {
  testingNonExistingRoute()
  getAllUsers()
})
 