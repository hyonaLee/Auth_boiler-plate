const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyunhaLee:hyun9332!!@boilerplate.eaxo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected.'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})