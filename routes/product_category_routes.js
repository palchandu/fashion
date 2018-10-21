var express=require('express');
var routes=express.Router();
var category=require('../controllers/CategoryController.js');

routes.get('/',function(req,res){
    res.send('api routes working');
})
/* Add Category routes */
routes.post('/add_category',category.addCategory);
/* Add Sub Category routes */
routes.post('/add_subcategory',category.addSubCategory);
/* Category and Sub Category list routes */
 routes.get('/list',category.allList);
module.exports=routes;

