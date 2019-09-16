const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})


.get((req,res,next)=> {
    res.end('will send all the dishes!');
})

.post((req,res,next)=>{
    res.end('will add the dish: '+req.body.name + 'with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put peration not supported on /dishes');
})

.delete((req,res,next)=> {
    res.end('deleting all the dishes!');
});
/*

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
});*/




module.exports = dishRouter;
