import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/UserController.js';
import { adminLogin, registerAdmin } from '../controllers/AdministratorController.js';

const router = express.Router();

router.get('/users', getUsers);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.post('/admin', adminLogin);

router.post('/administrator', registerAdmin);

export default router;
