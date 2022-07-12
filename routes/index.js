var express = require('express');
var router = express.Router();
// const fetchNode = require('node-fetch');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search:searchString', async (req, res) => {
  let api = await axios(`GET https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${req.params.searchString}`)
  console.log(api)
  res.render('index', {title: 'Express'})
})

module.exports = router;
