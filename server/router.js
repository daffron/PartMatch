const express = require('express')
const router = express.Router()

const database = require('../database/queries')

const MongoClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database


  

router.get('/api/searchsell/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        let cursor= db.collection('listings').find().toArray( (err, results) => {
            res.json(database.findAd(cursor, req.query.srch))
        })
    })
})

router.get('/searchresult/', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        res.sendFile('../public/searchresult.html')
    })
})

router.post('/newsell', (req, res) => {
    db.authenticate(process.env.DB_USER, process.env.DB_PW, (err, result) => {
        db.collection('listings').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('Listing saved to database')
            res.redirect('/')
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