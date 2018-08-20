import assert from 'assert'
import request from 'request-promise'

let proxy = 'http://localhost:9999'

describe('/dog', () => {
  it('creates a test dog', () => {
    let options = {
      uri: `${proxy}/dog`,
      method: 'POST',
      body: {
        name: 'nick',
        breed: 'tester',
        owner: 'alex'
      },
      json: true
    }

    request(options)
    .then(res => {
      assert.equal(res, 'Dog created!')
    })
  })
})
