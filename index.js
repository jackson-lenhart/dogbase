import express from 'express'
import bodyParser from 'body-parser'

import models from './models'

let app = express()

app.listen(
  process.env.PORT || 9999,
  () => console.log('Listening...')
)

app.use(bodyParser.json())

app.post('/dog', (req, res) => {
  let { name, breed, owner } = req.body

  models.Dog.create({
    name,
    breed,
    owner
  })
  .then(() => {
    res.send('Dog created!')
  })
  .catch(err => {
    res.status(500).send(err.message)
    console.error(err)
  })
})
