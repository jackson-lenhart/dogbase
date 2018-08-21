import express from 'express'
import bodyParser from 'body-parser'

import dog from './routes/dog'
import owner from './routes/owner'

let app = express()

app.listen(
  process.env.PORT || 9999,
  () => console.log('Listening...')
)

app.use(bodyParser.json())

app.use('/dog', dog)
app.use('/owner', owner)
