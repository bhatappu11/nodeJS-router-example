const express = require('express');
const bodyParser = require('body-parser');

const leadRouter = express.Router();
leadRouter.use(bodyParser.json());

leadRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})


.get((req,res,next)=> {
    res.end('will send all the leaders!');
})

.post((req,res,next)=>{
    res.end('will add the leader: '+req.body.name + 'with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put peration not supported on /leaders');
})

.delete((req,res,next)=> {
    res.end('deleting all the leaders!');
});

module.exports = leadRouter;