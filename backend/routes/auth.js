const express = require("express")
const User = require("../model/User")
const router = express.Router()
const {body,validationResult} = require("express-validator")



router.post('/',
   [ body("name","Invalid ,Name must be more than 10 Characters").isLength({min:10}),
    body("email","Enter Valid Email ! ").isEmail(),
    body("password","Invalid ,password must be more than 10 Characters").isLength({min:10})]
,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        username: req.body.username,
        password: req.body.password,
        }).then(user => res.json(user));
    
})
module.exports = router