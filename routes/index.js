var express = require('express');
var router = express.Router();

const User = require('../models/User');
const mongoose = require('mongoose')


mongoose.connect(uri);

// const fetchNode = require('node-fetch');
/* GET home page. */

router.get('/', function(req, res, next) {
  try{
    
    const user = new User({
      name : "Owais",
      email: "wajan@hmasd.com",
      password: "sdasdkjdue82344ro34urhd",
    })
  
    user.save()
  
    res.render('index', { title: 'Express' });
  } catch(e) {
    console.log(e)
  }
  
});

module.exports = router;
