const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,  // Use maxlength instead of length
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure email is unique
        maxlength: 50, // You might want to increase this limit
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Set a minimum length for better security
    }
});

const userModel = mongoose.model("Register", userSchema);
module.exports = userModel;
