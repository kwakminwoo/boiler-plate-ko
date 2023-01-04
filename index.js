const express = require('express') 
const app = express()
const port = 3000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kwakminwoo:Rhkralsdn!94@boilerplate.gbvvfz7.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connect...'))
.catch(err => console.log(err))


app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))