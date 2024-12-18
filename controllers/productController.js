
//GET/api/users
const getProducts = (req, res) => {
    res.status(200).json({message:"GET ALL PRODUCTS"});
}

//GET/api/user:id
const getProduct = (req, res) => {
    res.status(200).json({message:"GET ONE PRODUCTS"});
}

//POST/api/users/:id
const createProduct = (req, res) => {
    res.status(200).json({message:"CREATE PRODUCT"});
}

//PUT/api/users/:id
const updateProduct = (req, res) => {
    res.status(200).json({message:"UPDATE PRODUCT"});
}

//DELETE/api/users/:id
const deleteProduct = (req, res) => {
    res.status(200).json({message:"UPDATE PRODUCT"});
}
module.exports = {getProducts,getProduct,createProduct,updateProduct,deleteProduct};