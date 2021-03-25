const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    nama: {
        type: String
    }
})

module.exports = mongoose.model("login", userSchema);