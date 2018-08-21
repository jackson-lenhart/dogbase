import { Router } from 'express'

import models from '../models'

let router = Router()

router.post('/', (req, res) => {
  let { name, breed, OwnerId } = req.body

  models.Dog.create({
    name,
    breed,
    OwnerId
  })
  .then(() => {
    res.sendStatus(200)
  })
  .catch(err => {
    res.sendStatus(500)
    console.error(err)
  })
})

export default router
