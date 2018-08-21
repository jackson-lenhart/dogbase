import assert from 'assert'
import request from 'request-promise'

let proxy = 'http://localhost:9999'

describe('/dog', () => {
  it('creates a test dog', done => {
    let options = {
      uri: `${proxy}/dog`,
      method: 'POST',
      body: {
        name: 'nick',
        breed: 'tester',
        owner: 'alex',
        OwnerId: 1
      },
      json: true
    }

    request(options)
    .then(res => {
      assert.equal(res, 'OK')
      done()
    })
    .catch(err => {
      done(err)
    })
  })
})

describe('/owner', () => {
  it('creates a test owner', done => {
    let options = {
      uri: `${proxy}/owner`,
      method: 'POST',
      body: {
        name: 'patrick'
      },
      json: true
    }

    request(options)
    .then(res => {
      assert.equal(res, 'OK')
      done()
    })
    .catch(err => {
      done(err)
    })
  })
})
