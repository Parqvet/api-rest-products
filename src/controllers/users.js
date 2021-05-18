const express = require('express');
const Succes = require('../handlers/succesHandler');
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
        res.json(new Succes(users));
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

        res.status(201).json(new Succes(user));
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
    
        res.json(new Succes(userUpdated));
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
        res.json(new Succes(user));

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
        res.json(new Succes(user));
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