const express = require('express')
const router = express.Router()
const db = require('../db')
let data = []

const getIndex = (id) => id.replace(/^Entity/, '')

setInterval(() => {
  db.Entity.find({})
    .select('-_id -__v')
    .limit(20)
    .then((entities) => (data = entities.sort((a, b) => getIndex(a.id) - getIndex(b.id))))
    .catch(console.log)
}, 500)

router.post('/update', async (req, res, next) => {
  try {
    let entity = await db.Entity.findOne({ id: req.body.id })
    if (!entity) {
      await db.Entity.create(req.body)
    } else {
      for (let i in req.body) {
        if (i === 'id') continue
        entity[i] = req.body[i]
      }
      await entity.save()
    }
    res.end()
  } catch (e) {
    next(e)
  }
})

router.post('/get-data', function (req, res, next) {
  res.send(data)
})

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
