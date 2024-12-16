const express = require ("express");
const router = express.Router();
const getUsers = require("../controllers/category")

//USERS
router.route("/").get(getUsers);

//for one user
router.route("/:id").get((req,res) => {
    res.json({message:`GET SINGLE USER : ${req.params.id}`})
})


//post
router.route("/").post((req,res) => {
    console.log(req.body);
    
    res.json({message:"create a user"})
})


//update
router.route("/:id").put((req,res) => {
    res.json({message:`update a user ${req.params.id}`})
})

//delete
router.route("/:id").delete((req,res) => {
    res.json({message:`delete a user ${req.params.id}`})
})






module.exports = router;