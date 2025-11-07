const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Basic middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Import routes (will be created in next commit)
// const indexRoutes = require('./routes/index');
// app.use('/', indexRoutes);

// Temporary basic route for testing
app.get("/", (req, res) => {
  res.send(`
        <h1>Blog Platform - MVC Architecture Demo</h1>
        <p>Server is running on port ${PORT}</p>
        <p>This is a temporary homepage. Full routing will be implemented next.</p>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts (Coming Soon)</a></li>
            <li><a href="/users">Users (Coming Soon)</a></li>
            <li><a href="/about">About (Coming Soon)</a></li>
            <li><a href="/contact">Contact (Coming Soon)</a></li>
        </ul>
    `);
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Handle 404 - Page not found
app.use((req, res) => {
  res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">Go back to homepage</a>
    `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Blog Platform server running on http://localhost:${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`📂 Static files: ${path.join(__dirname, "public")}`);
  console.log(`📄 Views directory: ${path.join(__dirname, "views")}`);
});

module.exports = app;
