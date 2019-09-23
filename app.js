const logModule = require('./module')
const fs = require('fs')
const http = require('http')
const express = require('express')


const app = express() 


app.get('/carsales', function(req,res,next){
    return res.json("hello")
})

app.use('/mecca/:product',(req,res,next)=>{
    if(req.params['product']==='mecca'){
        res.send('error')
    }
    next()
})
app.get('/mecca/:product', function(req,res,next){
    return res.send(`mecca ${req.params['product']}`)
})



app.listen(5666, function(){
    console.log("service running on port 5666")
})
// http.createServer((req, res)=>{
    
//     if(req.url.indexOf('.css')>0){
//         const cssContent = fs.readFileSync('./style.css')
//         res.write(cssContent)
//         res.end();
//     } else{
//         const content = fs.readFileSync('./index.html')
//         res.write(content)
//         res.end();
//     }
//     route.get('/carsales', function(req,res,next){
//         res.write("hello")
//     })

// }).listen(5666);

// logModule.logMessage('dev server is running on 5666...')

