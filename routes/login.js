const DB = require('./../routes/db.js')

let db

const dbCheck = setInterval(() => {
  const x = DB.db()
  if (x && x !== undefined && x !== null) {
    db = x
    clearInterval(dbCheck)
  }
}, 1)

const router = require("express").Router()
const passKey = 'yOO+0V+h9zoVw6mmUzkXR+J5UdL+V73cw0q9aIkpcYJXK6wNPb5LAEeRMiPVu'
const cookie = require('cookie')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
  const username = req.body._id

  db.collection('user').findOne({_id: req.body._id }, {password: 1}, (err, item) => {
    if (err) {
      console.error(err)
    }

    if (item.password && item.password === req.body.password) {
      res.setHeader('Set-cookie',cookie.serialize('user',jwt.sign({name: username,type: "coaching", level:"staff",staff:username},passKey)),{expiresIn: '2hr',httpOnly:true,path: '/'})
      res.status(200)
      res.end()
    } else {
      res.status(401)
      res.end()
    }

  })
})

router.get('/authenticated', (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || "")
	if (cookies && cookies.hasOwnProperty('user')) {
    jwt.verify(cookies.user,passKey, (err,decoded) => { //JWT is verified. If verified and true, then its decoded

      db.collection('user').findOne({_id: decoded.name}, {_id: 1}, (err, item) => {
        if (err) {
          console.log(err)
          res.end(504)
        }

        if (item === null || !item._id) {
          res.status(401)
          res.end()
        } else {
          console.log('user authorized')
        	res.status(200)
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