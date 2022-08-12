// routes/api/books.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
// Load Book model
//const Book = require('../../models/Book');
const Home = require('../../models/Home');
const auth = require('../../middleware/auth');

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  console.log('ddd');
  Home.findById("62f1ed402c8e05b5526308c2")
    .then(homes => res.json(homes))
    .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});


router.post('/update-detail', (req, res) => {
    console.log('update');
    var myquery = { _id: "62f1ed402c8e05b5526308c2" }; 
  var newvalues = { $set: {banner_h1:req.body.banner_h1,banner_h2:req.body.banner_h2,banner_h3:req.body.banner_h3,banner_link:req.body.banner_link,how_heading:req.body.how_heading,how_description:req.body.how_description,how_1_heading:req.body.how_1_heading,how_1_description:req.body.how_1_description,how_2_heading:req.body.how_2_heading,how_2_description:req.body.how_2_description,how_3_heading:req.body.how_3_heading,how_3_description:req.body.how_3_description,services_heading:req.body.services_heading,services_description:req.body.services_description,section_1_heading:req.body.section_1_heading,section_1_description:req.body.section_1_description,section_1_link:req.body.section_1_link} }; 
  Home.updateOne(myquery, newvalues, function(err1, res1){
  if(err1) throw err1;
  else res.json({ msg: 'Home page details updated' });
  
  });
  });

module.exports = router;