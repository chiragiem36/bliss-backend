const router = require("express").Router()
const cookie = require("cookie")
const jwt = require("jsonwebtoken")
const passKey = 'yOO+0V+h9zoVw6mmUzkXR+J5UdL+V73cw0q9aIkpcYJXK6wNPb5LAEeRMiPVu'

const DB = require('./../routes/db.js')

let db
let count = 0

const dbCheck = setInterval(() => {
  const x = DB.db()
  if (x && x !== undefined && x !== null) {
    db = x
    clearInterval(dbCheck)
    db.collection('count').findOne({_id: 'last'}, (err, item) => {
      if (err) {
        console.error(err)
      }
      if (item) {
        count = item.count
        console.log("LAST COUNT - ", count)
      }
    })
  }
}, 300)

router.get("/latest", (req, res) => {
	db.collection('blogs').findOne({_id: count}, {_id: 1, author: 1, desc: 1}, (err, items) => {
    if (err) {
      console.err(err)
      res.status(500)
      res.end()
    }

    if (items && items.count > 0) {
      res.status(200)
      res.json(items)
    } else {
      res.status(404)
      res.end()
    }
	})
})

router.get("/blog=:id", (req, res) => {
	db.collection('blogs').findOne({_id: Number(req.params.id)}, (err, items) => {
    if (err) {
      console.err(err)
      res.status(500)
      res.end()
    }

    if (items && items._id) {
      res.status(200)
      res.json(items)
    } else {
      res.status(404)
      res.end()
    }
	})
})

router.get("/tag=:tag", (req, res) => {
	db.collection('blogs').findOne({tags: [req.params.tag]}, (err, items) => {
    if (err) {
      console.err(err)
      res.status(500)
      res.end()
    }

    if (items && items.count > 0) {
      res.status(200)
      res.json(items)
    } else {
      res.status(404)
      res.end()
    }
	})
})

router.get("/last=:ts", (req, res) => {
	db.collection('blogs').findOne({_id: Number(req.params.ts) - 1}, (err, items) => {

    if (err) {
      console.error(err)
      res.status(500)
      res.end()
    }

    if (items && items.count < 1) {
      res.status(304)
      res.end()
    } else {
      res.status(200)
      res.json(items)
    }
	})
})

router.post("/last=:ts&tag=:tag", (req, res) => {
  const o = {}

  o._id = {$ne: req.body.counts}
  o.tags = req.body.tags

	db.collection('blogs').findOne({_id: Number(req.params.ts) - 1}, (err, items) => {

    if (err) {
      console.error(err)
      res.status(500)
      res.end()
    }

    if (items && items.count < 1) {
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
          count = count + 1
          req.body.count = count
          req.body._id = count
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
