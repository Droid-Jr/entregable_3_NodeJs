const { Router } = require('express');

const {  getAllUsers, getUserById, getUSerPut, deleteUser, postUser } = require('../controllers/users.controllers');

const router = Router();

router.post('/users',postUser );

router.get('/users',getAllUsers );

router.get('/users/:id',getUserById );


router.put('/users/:id',getUSerPut );

router.delete('/users/:id',deleteUser );


module.exports = router;