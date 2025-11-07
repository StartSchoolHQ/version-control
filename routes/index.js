const express = require("express");
const router = express.Router();

// Import controllers (will be created in later phases)
// const homeController = require('../controllers/homeController');
// const userController = require('../controllers/userController');
// const postController = require('../controllers/postController');

// Home routes
router.get("/", (req, res) => {
  res.render("home", {
    title: "Blog Platform - Home",
    message: "Welcome to our Blog Platform!",
    currentPage: "home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    currentPage: "about",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us",
    currentPage: "contact",
  });
});

// User routes (placeholder - will be expanded in Phase 3)
router.get("/users", (req, res) => {
  res.send(
    '<h1>Users Page</h1><p>User management coming soon!</p><a href="/">Back to Home</a>'
  );
});

router.get("/users/login", (req, res) => {
  res.send(
    '<h1>Login Page</h1><p>Login functionality coming soon!</p><a href="/">Back to Home</a>'
  );
});

router.get("/users/register", (req, res) => {
  res.send(
    '<h1>Register Page</h1><p>Registration functionality coming soon!</p><a href="/">Back to Home</a>'
  );
});

// Post routes - now implemented in Phase 4

// API routes for future AJAX functionality
router.get("/api/posts", (req, res) => {
  res.json({ message: "Posts API endpoint", posts: [] });
});

router.get("/api/users", (req, res) => {
  res.json({ message: "Users API endpoint", users: [] });
});

module.exports = router;
