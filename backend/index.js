const express = require('express')
const db = require("./db.js")
db()
const app = express()
const port = 3000

app.post('/', (req, res) => {
  const obj = {
    name : "name ",
    password : "lol"
  }
  res.send(obj)
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)

})