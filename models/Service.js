// models/Book.js

const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
},{ timestamps: true });

module.exports = Service = mongoose.model('service', ServiceSchema);