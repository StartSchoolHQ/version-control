// User Routes - Simple routing for user management
// Training project focusing on MVC pattern

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET /users - List all users
router.get('/', UserController.getAllUsers);

// GET /users/login - Show login form
router.get('/login', UserController.showLogin);

// POST /users/login - Handle login
router.post('/login', UserController.handleLogin);

// GET /users/register - Show registration form
router.get('/register', UserController.showRegister);

// POST /users/register - Handle registration
router.post('/register', UserController.handleRegister);

// GET /users/logout - Handle logout
router.get('/logout', UserController.handleLogout);

// GET /users/:id - Show user profile
router.get('/:id', UserController.getUserProfile);

module.exports = router;