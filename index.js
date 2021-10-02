const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");


app.use(express.urlencoded({extended: false})); 
app.use(express.json());  

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hyunhaLee:hyun9332!!@boilerplate.eaxo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('mongoDB Connected....'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World~~~')
})


app.post('/register', (req, res) => {

  //회원가입 시 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.


  const user = new User(req.body)

  user.save((err,user) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))