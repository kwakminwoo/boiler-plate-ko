const express = require('express') 
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connect...'))
.catch(err => console.log(err))


app.get('/', (req,res) => res.send('Hello World! HIHI'))
app.post('/register',(req, res) => {
    // 회원 가입 시, 필요한 정보 client 정보를 수신받아 DB에 저장한다
    const user = new User(req.body)
     
    user.save((err, doc) => {
        if(err) return res.json({success: false,err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
