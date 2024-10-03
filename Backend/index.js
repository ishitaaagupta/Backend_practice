require('dotenv').config()



const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('ishitadotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>hello ji</h2>')
})
app.get('/github',(req,res)=>{
    res.json(({user:'tobby'}))
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})