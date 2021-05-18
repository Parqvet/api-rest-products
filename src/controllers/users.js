const express = require('express');
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
        res.json(users);
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
        user = await save();
    
        const result = {
            message: 'User created',
            user
        }
        res.status(201).json(result);
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
    
        await update(id, user);
    
        const result = {
            message: 'User updated',
            user
        }
        res.json(result);
    } catch(err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getById = (req, res, next) => {
    try {
        const result = {
            user: findById(req.params.id)
        }
        res.json(result);
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
        res.json(result);
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