const express = require("express")
const User = require("../model/User")
const router = express.Router()
const {body,validationResult} = require("express-validator")



router.post('/saveuser',
   [body("name","Invalid ,Name must be more than 10 Characters").isLength({min:10}),
    body("email","Enter Valid Email ! ").isEmail(),
    body("password","Invalid ,password must be more than 10 Characters").isLength({min:10})]
,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
    try {
        
     
    let user = await  User.findOne({email: req.body.email})
    if (user){
        console.log(user.name)
        res.json({error:"enter Valid Email"})
    }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email : req.body.email
        }
    )
   res.json(user)
}catch (err) {
     console.error(err.message)   
     res.status(500).send("lol")
   }
} ) 
module.exports = router