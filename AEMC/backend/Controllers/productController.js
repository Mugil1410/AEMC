const productModel=require('../models/productModel')


exports.getProducts= async(req,res,next)=>{
   const query= req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i' //case insensitive search
    }}:{}
    // Get all products API in route - api/v1/products
    const products=await productModel.find(query);
    res.json({
        sucess:true,
        products
    })
}

// Get single products API in route - api/v1/products/:id
exports.getSingleProducts= async(req,res,next)=>{
    try {
        const product = await productModel.findById(req.params.id);
        res.json({
        sucess:true,
        product
    })
        
    } catch (error) {
        res.json({
            success:false,
            errMessage:"Product not found"
        })
        
    }
    
}    
