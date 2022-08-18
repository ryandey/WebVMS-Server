const mongoose = require("mongoose");
const Schema = mongoose.Schema

const volunteerSchema = new Schema({
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
    //unique: true,
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
    type: Number,
    required: false,
  },
  phoneNumberCell: {
    type: Number,
    required: true,
  },
  phoneNumberWork: {
    type: Number,
    required: false,
  },
  education: {
    type: String,
    required: true,
  },
  emergencyContactName: {
    type: String,
    required: true,
  },
  emergencyContactPhone: {
    type: Number,
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
  approvalStatus: {
    type: String,
    required: true,
  },
  availabilityTimes: {
    type: String,
    required: true,
  },
  currentLicenses: {
    type: String,
    required: false,
  },
  skills: {
    type: String,
    required: false,
  },
  preferredCenter: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Volunteers', volunteerSchema)
