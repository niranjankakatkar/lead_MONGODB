
const express = require('express');
const router= express.Router();
const Users=require('../models/Users');

//Routes
router.get('',(req,res)=>{
    const locals={
        title: "Dashboard",
        description: "---"
    }
    res.render('index',{locals});
})


function inserUserData(){
    Users.insertMany([
        {
            id: 1,
            fullname:"Niranjan",
            email:"n@gmail.com",
            mobile:"7887565827"
        }
    ])
}
inserUserData();




//Routes
router.get('/franchisees',(req,res)=>{
    const locals={
        title: "Dashboard",
        description: "---"
    }
    res.render('franchisees',{locals});
})

module.exports=router;