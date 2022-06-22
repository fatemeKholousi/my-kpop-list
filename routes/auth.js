const express=require("express")
const router=express.Router()

// @route           GET api/users
// @desc(ription)   Get logged in user
// @access          Private
router.get('/',(req,res)=>{
    res.send("logged in a user")
})


// @route           POST api/users
// @desc(ription)   Auth user and get token
// @access          Private
router.post('/',(req,res)=>{
    res.send("log in user")
})

module.exports=router