const { Router } = require('express');
const { 
    getAllUsers, 
    createUser, 
    updateUser, 
    getById, 
    deleteUser 
} = require('../controllers/users');

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', getById);
router.delete('/:id', deleteUser);

module.exports = router;