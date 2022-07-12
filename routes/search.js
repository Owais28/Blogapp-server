var express = require('express');
var router = express.Router();
const axios = require('axios').default

/* GET users listing. */
router.get('/', async (req, res) => {
    let api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=f05e9379b7634f34bec1b7dc4df4fe65&query=Super`)
    let results = await api.data.results
    console.log(results)
    res.send(results)
})
module.exports = router;