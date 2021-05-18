const bcrypt = require('bcrypt');

const User = require('../models/user');

class UserRepository {

    constructor() {

    }

    async findAll() {
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }

    async save(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return await User.create(user);
    }

    async update(id, user) {
        return await User.findByIdAndUpdate(id, use, {new: true});
    }

    async remove(id) {
        return await User.findByIdAndRemove(id);
    }
}

module.exports = UserRepository;