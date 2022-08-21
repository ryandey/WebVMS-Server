const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// -- Since we do not have a signup route, we will not have the password stored as a hash for sake of simplicity
// -- In senior project, we must use bcrypt to hash the password and store it as a hash using the SECRET key in the .env file



userSchema.statics.register = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields are required');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is invalid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({email, password: hash})

  return user;
}

// Static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  // find user by email (determine if exists)
  const user = await this.findOne({ email });

  // if user does not exist, throw error
  if (!user) {
    throw new Error("User does not exist");
  }

  // compare passwords
  const match = await bcrypt.compare(password, user.password);

  // if passwords do not match, throw error
  if (!match) {
    throw new Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
