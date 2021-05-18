const express = require('express');
const Success = require('../handlers/succesHandler');
const {
    findById,
    findAll,
    save,
    update,
    remove
} = require('../services/userService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await findAll();
        res.json(new Success(users));
    } catch(err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = async (req, res, next) => {
    try {
        let user = req.body;
        user = await save(user);

        res.status(201).json(new Success(user));
    } catch(err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        let user = req.body;
    
        const userUpdated = await update(id, user);
    
        res.json(new Success(userUpdated));
    } catch(err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getById = async (req, res, next) => {
    try {
        const user = await findById(req.params.id)
        res.json(new Success(user));

    } catch(err) {
    next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = remove(id);
    
        const result = {
            message: `User with ${id} deleted`,
            user
        }
        res.json(new Success(user));
    } catch(err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    getById,
    createUser,
    updateUser,
    deleteUser
}