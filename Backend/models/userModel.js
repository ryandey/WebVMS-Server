const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
  username: {
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

// Static login method
userSchema.statics.login = async function (username, password) {
  // validation
  if (!username || !password) {
    throw new Error("All fields are required");
  }

  // find user by username (determine if exists)
  const user = await this.findOne({ username });

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
