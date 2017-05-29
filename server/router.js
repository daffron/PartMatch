const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


router.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database



  

router.get('/api/searchsell/', (req, res) => {
   
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        let cursor= db.collection('listings').find().toArray( (err, results) => {
            res.json({result: results})
        })
    })
})

router.get('/api/searchwanted/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        db.collection('wanted').find().toArray((err, results) => {
            res.json({result: results})
        })
    })
})


router.post('/api/newlisting/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        db.collection('listings').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('Listing saved to database', req.body)
            res.json({})
        })
    })
})

router.post('/newwanted', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        db.collection('wanted').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('Wanted ad saved to database')
            res.redirect('/')
        })
    })
})

router.post('/newuser', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        db.collection('users').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('User saved to database')
            res.redirect('/')
        })
    })
})
})



module.exports = router