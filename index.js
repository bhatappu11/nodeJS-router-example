const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRouter=require('./routes/dishRouter');
//const dishRouter1=require('./routes/dishRouter1');
const promotions=require('./routes/promotions');
const leadRouter=require('./routes/leadRouter')

const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promotions);
app.use('/leadRouter',leadRouter);
//app.use('/dishes/:dishId',dishRouter1);





app.use((req, res, next) => {
    res.statusCode=200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>this is an express server<h1><body><html>');
});

const server =http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})