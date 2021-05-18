const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');

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
          unique: true,
          index: true
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

    userSchema.plugin(uniqueValidator, { message: 'Already exist in the DB' })
    userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('users', userSchema);