const express=require("express")
const router=express.Router()

// @route           GET api/lists
// @desc(ription)   get all users kpop-list
// @access          private
router.get('/',(req,res)=>{
    res.send("get all kpop groups")
})



// @route           Post api/lists
// @desc(ription)   add new kpop group
// @access          private
router.post('/',(req,res)=>{
    res.send("add a kpop group")
})



// @route           PUT api/lists/:id
// @desc(ription)   update list
// @access          private
router.delete('/:id',(req,res)=>{
    res.send("update kpop group")
})


// @route           PUT api/lists/:id
// @desc(ription)   delete kpop group
// @access          private
router.put('/:id',(req,res)=>{
    res.send("update kpop group")
})

module.exports=router