//first NodeJS application

const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
  res.send('Hello Virtual Machine!')
})

app.put('/', (req, res) => {
    res.send('put request')
})

app.delete('/', (req, res) => {
    res.send('delete request')
})

app.post('/', (req, res) => {
    res.send('post request')
})

app.get('/service', (req, res) => {
    res.send('service retrieved')
})


app.listen(port,()=>{
  console.log(`Express Application  listening at port 3000`)
})