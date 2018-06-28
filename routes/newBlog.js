const router = require("express").Router()
const cookie = require("cookie")
const jwt = require("jsonwebtoken")
const passKey = 'yOO+0V+h9zoVw6mmUzkXR+J5UdL+V73cw0q9aIkpcYJXK6wNPb5LAEeRMiPVu'

const DB = require('./../routes/db.js')

let db
let count

const dbCheck = setInterval(() => {
  const x = DB.db()
  if (x && x !== undefined && x !== null) {
    db = x
    clearInterval(dbCheck)
    db.collection('count').findOne({_id: 'last'}, (err, item) => {
      if (item) {
        lsB = item.count
        console.log("LAST COUNT - ", item.count)
      }
    })
  }
}, 300)

router.get("/latest", (req, res) => {
	db.collection('blogs').findOne({_id: count}, (err, items) => {
    if (err) {
      console.err(err)
      res.status(500)
      res.end()
    }

    if (items && items.length < 1) {
      res.status(304)
      res.end()
    } else {
      res.status(200)
      res.json(items)
    }
	})
})

router.get("/last=:ts", (req, res) => {
	db.collection('blogs').findOne({_id: {$lt: Number(req.params.ts)}}, (err, items) => {

    if (err) {
      console.error(err)
      res.status(500)
      res.end()
    }

    if (items && items.length < 1) {
      res.status(304)
      res.end()
    } else {
      res.status(200)
      res.json(items)
    }
	})
})

router.post('/new', (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || "")
	if (cookies && cookies.hasOwnProperty('user')) {
    jwt.verify(cookies.user,passKey, (err,decoded) => { //JWT is verified. If verified and true, then its decoded

      db.collection('user').findOne({_id: decoded.name}, {_id: 1}, (err, item) => {
        if (err) {
          console.log(err)
          res.end(504)
        }

        if (item && item._id) {
          count += 1
          req.body.count = count
          db.collection('blogs').insert(req.body)
          db.collection('count').update({_id: 'last'}, {$set: {count: count}})
          console.log("LAST COUNT - ", count)
          res.status(200)
          res.end()
        } else {
        	res.status(401)
          res.end()
        }
      })
    })

  } else {
    res.status(401)
    res.end()
  }
})

module.exports = router
