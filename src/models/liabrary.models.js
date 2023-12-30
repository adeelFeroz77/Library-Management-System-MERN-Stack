const mongoose = require('mongoose');
const Avaliblity= require('./Avaliblity.model')
const User= require('./User.models')

const librarySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  }, 
  Image:{
    public_id:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    }},
    
  Pages:{ 
    type: Number,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Avaliblity:{
    type: mongoose.Types.ObjectId, 
    ref: 'Avaliblity'
  },
    userDetail:{
      type: mongoose.Types.ObjectId, 
    ref: 'User'
    }


  // Avaliblity:{
  //   enum:"AVALIBLE" || "NOT AVALIBLE"
  // }
});

module.exports = mongoose.model('Book', librarySchema);
