// models/Book.js

const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  icon:{
    type:String, default:"img.png"
  }
},{ timestamps: true });

module.exports = Service = mongoose.model('service', ServiceSchema);