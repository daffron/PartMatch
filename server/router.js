const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
var ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('admin')

  router.get('/api/searchsell/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
      if (err) return console.log(err)
      db.collection('listings').find({sold_to_user: null}).toArray((err, results) => {
        if (err) return console.log(err)
        res.json({result: results})
      })
    })
  })

  router.get('/api/searchwanted/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
      if (err) return console.log(err)
      db.collection('wanted').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.json({result: results})
      })
    })
  })

  router.post('/api/newlisting/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
      if (err) return console.log(err)
      db.collection('listings').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('Listing saved to database', req.body)
        res.json({})
      })
    })
  })

  router.post('/newwanted', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
      if (err) return console.log(err)
      db.collection('wanted').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('Wanted ad saved to database')
        res.redirect('/')
      })
    })
  })

  router.post('/newuser', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
      if (err) return console.log(err)
      db.collection('users').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('User saved to database')
        res.redirect('/')
      })
    })
  })
})

router.delete('/api/deletelisting/:id', (req, res) => {
  const id = req.params.id
  db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
    if (err) console.log(err.message)
    db.collection('listings').remove({_id: ObjectId(id)}, (err, result) => {
      if (err) {
        console.log(err.message)
        return
      }
      // check result to see how many documents are deleted
      console.log('removed')
    })
  })
})

router.put('/api/makelistingsold/:id', (req, res) => {
  const userId = req.params.id
  const listingId = Object.keys(req.body)[0]
  console.log(userId, listingId)
  db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
    if (err) console.log(err.message)
    db.collection('listings').update({_id: ObjectId(listingId)}, {$set: {"sold_to_user": userId}})
  })
})


router.get('/api/searchbought/:userId', (req, res) => {
  const userId = req.params.userId
  db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
    if (err) return console.log(err)
    db.collection('listings').find({sold_to_user: userId}).toArray((err, results) => {
      if (err) return console.log(err)
      res.json({result: results})
    })
  })
})

// router.get('*', (req, res) => {
//   res.send('Uh oh, Youve been 404\'d <br><a href="/">Go Back To Home</a>', 404)
// })

module.exports = router
