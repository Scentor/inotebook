const express = require("express")
const router = express.Router()


router.post('/',(req,res)=>{
    console.log(req.body)
    const obj = {
        name : "anusha"
    }
    res.json(obj)
})
module.exports = router