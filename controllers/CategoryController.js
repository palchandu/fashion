var ProductCategory=require('../models/product_category.js');
var categoryController={};
/*Add Category */
categoryController.addCategory=function(req,res){
    var category=new ProductCategory(req.body);
    category.save(function(err,data){
        if(err)
        {
            //return next(err);
            res.status(400).json({status:"400",message:err});
        }
        else{
            //res.json(data);
            res.status(200).json({status:"200",message:"Category created successfully!",res:data});
        }
    })
}
/*Add Sub category */

categoryController.addSubCategory=function(req,res){
    ProductCategory.findOneAndUpdate({_id:req.body._id},{$push:{
        sub_category:req.body.name
    }},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
}

/*Show All Category and subcategory */

categoryController.allList=function(req,res){
    ProductCategory.find().exec(function(err,result){
        if(err)
        {
            res.status(400).json({status:400,message:err});
        }
        else
        {
            res.status(200).json({status:"200",message:"List of category and subcategory",category:result});
        }
    })
}


module.exports=categoryController;