const express = require('express');
const bodyParser = require('body-parser');
const morgan=require('morgan');

const dishRouter1 = express.Router();
dishRouter1.use(bodyParser.json());

dishRouter1.route('/')


.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})


.get((req,res,next)=> {
    res.end('will send details of dishes: '+req.params.dishId+'to you');
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('post operation not supported on /dishes/'+req.params.dishId);
})
.put((req,res,next)=>{
    
    res.write('updaing the dish'+req.params.dishId+'\n');
    res.end('will update the dish: '+req.body.name +'with details: '+req.body.description);
})

.delete((req,res,next)=> {
    res.end('deleting the dishe!'+req.params.dishId);
});

//module.exports = dishRouter1;
