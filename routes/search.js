var express = require('express');
var router = express.Router();
// var nodefetch = require('node-fetch')
const axios = require('axios').default

/* GET users listing. */
router.get('/', async (req, res) => {
    try{

        let api = await axios(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=f05e9379b7634f34bec1b7dc4df4fe65&query=Super`)
        let results = await api.data
        console.log(results)
        res.send(results)
    } catch(e){
        res.send(e)
        console.log(e)
    }
})
module.exports = router;