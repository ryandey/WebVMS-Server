const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  phoneNumberHome: {
    type: String,
    required: false,
  },
  phoneNumberCell: {
    type: String,
    required: true,
  },
  phoneNumberWork: {
    type: String,
    required: false,
  },
  // may need to be added to another schema
  education: {
    type: String,
    required: true,
  },
  emergencyContactName: {
    type: String,
    required: true,
  },
  emergencyContactPhone: {
    type: String,
    required: true,
  },
  emergencyContactEmail: {
    type: String,
    required: true,
  },
  hasCopyOfID: {
    type: Boolean,
    required: true,
  },
  hasCopyOfSSN: {
    type: Boolean,
    required: true,
  },
  // may need to be added to another schema
  approvalStatus: {
    type: String,
    required: true,
  },
  // NEED availability times, current licenses, skills/interests, and preferred centers
})

module.exports = mongoose.model('Volunteers', volunteerSchema)
