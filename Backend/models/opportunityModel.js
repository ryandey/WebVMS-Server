const mongoose = require("mongoose");
const Schema = mongoose.Schema

const opportunitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },

  streetAddress: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zipCode: {
    type: String,
    required: false,
  },
  
  requiredSkills: {
    type: String,
    required: false,
  },

  date: {
    type: String,
    required: false,
  },

  time: {
    type: String,
    required: false,
  },

})

module.exports = mongoose.model('Opportunities', opportunitySchema)