const express = require('express');
const bodyParser = require('body-parser');

const promotions = express.Router();
promotions.use(bodyParser.json());

promotions.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})


.get((req,res,next)=> {
    res.end('will send all the promotions!');
})

.post((req,res,next)=>{
    res.end('will add the promotion: '+req.body.name + 'with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put peration not supported on /promotions');
})

.delete((req,res,next)=> {
    res.end('deleting all the promotions!');
});

module.exports = promotions;