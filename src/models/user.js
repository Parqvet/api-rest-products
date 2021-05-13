const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
        name: String,
        lastname: String,
        mail: String,
        birthdate: Date,
    },
    { timestamps: true }
  );

  module.exports = mongoose.model('users', userSchema);