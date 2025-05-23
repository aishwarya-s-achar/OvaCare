const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
});

const User = mongoose.model("register", user);

module.exports = User;
