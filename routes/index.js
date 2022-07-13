var express = require('express');
var router = express.Router();
const dotenv = require('dotenv').config();

const User = require('../models/User');
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URI);

// const fetchNode = require('node-fetch');
/* GET home page. */

router.get('/', function(req, res, next) {
  try{

    // new instance of user model
    const user = new User({
      name : "Athar",
      email: "wajan@hmasd.com",
      password: "sduh845#$^&^#$dsft54%",
    })


    user.save((err, result) => {
      console.log('Account created successfully\n');
      console.log({
        result
      })
    })
    
    res.render('index', { title: "Express"});

  } catch(e) {
    console.log(e)
  }
  
});

module.exports = router;
