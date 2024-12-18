const express = require("express");
const router = express.Router();
const {getProducts,getProduct,updateProduct,deleteProduct,createProduct} = require("../controllers/productController")
//USERS
router.route("/").get(getProducts);

//ONE USER
router.route("/:id").get(getProduct);

//post
router.route("/").post(createProduct);

//update
router.route("/:id").put(updateProduct);


//delete
router.route("/:id").delete(deleteProduct);

module.exports = router;