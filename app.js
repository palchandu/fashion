const express=require('express');
var bodyParser = require('body-parser');
/*Router Require */
var categoryRouter=require('./routes/product_category_routes');
var blogRouter=require('./routes/blog_routes');
const app=express();

/*mongoose and connect */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chandra')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*Router Use */
app.use('/category',categoryRouter);
app.use('/blog',blogRouter);
const port=1234;
app.listen(port,function(){
    console.log('Applicaton running on port '+port);
})

module.exports=app;