const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT_ONE || 7070;

mongoose.connect("mongodb://localhost/auth-service");

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Auth-Service at ${PORT}`);
});
