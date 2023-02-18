const express = require("express");
const router = express.Router();
const userShema=require("../models/user");

router.post("/users",(req,res)=>{
    const user = userShema(req.body);
    user
    .save().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json()
    });

});

module.exports=router;