const login = require("./routes/login.js")
const newBlog = require("./routes/newBlog.js")

const mongo = require('mongodb')
const express = require('express')
const path = require('path')
const app = express()
const bp = require('body-parser')
const cors = require('cors')

app.use(bp.json())
app.use(cors())

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./dist/index.html"))
})
app.use("/dist", express.static("dist"))
app.use("/login", login)
app.use("/blogs", newBlog)

function validateXHR (req, res, next) {
	if (!req.xhr) {
		res.end("FUCK OFF")
	} else {
		next()
	}
}

app.use(validateXHR)

app.listen(process.env.PORT || 80,function(){
	console.log("listening on port " + 80)
})
