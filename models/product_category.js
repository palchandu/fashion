var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductCategorySchema=new Schema({
    name:{type:String,required:true,unique:true},
    sub_category:{ type : Array , "default" : [] },
    createdAt:{ type:Date,default:Date.now}
});

module.exports=mongoose.model('ProductCategory',ProductCategorySchema);