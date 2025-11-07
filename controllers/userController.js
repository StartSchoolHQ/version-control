// User Controller - Simple CRUD operations
// Training project - no real authentication, just structure demonstration

const User = require('../models/User');

class UserController {
    // Display all users
    static getAllUsers(req, res) {
        try {
            const users = User.findAll();
            const safeUsers = users.map(user => user.toSafeObject());
            res.render('users/index', { 
                title: 'Users - Blog Platform',
                users: safeUsers,
                currentPage: 'users'
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Error loading users');
        }
    }

    // Show user profile
    static getUserProfile(req, res) {
        try {
            const user = User.findById(req.params.id);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.render('users/profile', { 
                title: `${user.username} - Profile`,
                user: user.toSafeObject(),
                currentPage: 'users'
            });
        } catch (error) {
            console.error('Error fetching user profile:', error);
            res.status(500).send('Error loading user profile');
        }
    }

    // Show login form
    static showLogin(req, res) {
        res.render('users/login', { 
            title: 'Login - Blog Platform',
            currentPage: 'login',
            error: null
        });
    }

    // Handle login (simplified - no real auth)
    static handleLogin(req, res) {
        try {
            const { email, password } = req.body;
            const user = User.findByEmail(email);
            
            if (!user || user.password !== password) {
                return res.render('users/login', { 
                    title: 'Login - Blog Platform',
                    currentPage: 'login',
                    error: 'Invalid email or password'
                });
            }

            // In real app: set session/jwt token
            console.log(`User logged in: ${user.username}`);
            res.redirect('/users');
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).send('Login error');
        }
    }

    // Show registration form
    static showRegister(req, res) {
        res.render('users/register', { 
            title: 'Register - Blog Platform',
            currentPage: 'register',
            error: null
        });
    }

    // Handle registration (simplified)
    static handleRegister(req, res) {
        try {
            const { username, email, password, confirmPassword } = req.body;

            // Simple validation
            if (!username || !email || !password) {
                return res.render('users/register', { 
                    title: 'Register - Blog Platform',
                    currentPage: 'register',
                    error: 'All fields are required'
                });
            }

            if (password !== confirmPassword) {
                return res.render('users/register', { 
                    title: 'Register - Blog Platform',
                    currentPage: 'register',
                    error: 'Passwords do not match'
                });
            }

            // Check if user exists
            if (User.findByEmail(email)) {
                return res.render('users/register', { 
                    title: 'Register - Blog Platform',
                    currentPage: 'register',
                    error: 'Email already registered'
                });
            }

            // Create user
            const newUser = User.create({ username, email, password });
            console.log(`New user registered: ${newUser.username}`);
            
            res.redirect('/users/login');
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).send('Registration error');
        }
    }

    // Handle logout (simplified)
    static handleLogout(req, res) {
        // In real app: destroy session/token
        console.log('User logged out');
        res.redirect('/');
    }
}

module.exports = UserController;