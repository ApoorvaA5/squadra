const express = require('express');
const { getUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
