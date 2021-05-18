const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
        name: {
          type: String,
          requerid: [true, 'Name required']
        },
        lastname: {
          type: String,
          requiredd: [true, 'Name required']
        },
        email: {
          type: String,
          requiredd: [true, 'Email required'],
          unique: true
        },
        password: {
          type: String,
          required: [true, 'Password required']
        },
        birthdate: Date,
        role: {
          type: String,
          required: true,
          default: 'USER_ROLE',
          enum: ['USER_ROLE', 'ADMIN_ROLE']
        },
        enable: {
          type: Boolean,
          required: true,
          default: true
        }
    },
    { timestamps: true }
  );

module.exports = mongoose.model('users', userSchema);