require("dotenv").config();
const express = require("express");
const { mongoose } = require("mongoose");

// Initialize express
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Pass the request to the next middleware
});

// Routes

// Use mongoose to connect to the database (MongoDB)
mongoose
  // Connect to given URI (stored in .env for security)
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listen for requests on specified port
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  // Catch any errors that occur and output message to console
  .catch((error) => {
    console.log(error);
  });
