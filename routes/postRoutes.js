// Post Routes - Simple routing for blog functionality
// Training project focusing on MVC pattern

const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// GET /posts - List all posts
router.get('/', PostController.getAllPosts);

// GET /posts/create - Show create post form
router.get('/create', PostController.showCreateForm);

// POST /posts - Handle post creation
router.post('/', PostController.handleCreate);

// GET /posts/author/:authorId - Posts by specific author
router.get('/author/:authorId', PostController.getPostsByAuthor);

// GET /posts/:id - Show single post
router.get('/:id', PostController.getPost);

// POST /posts/:id/comments - Add comment to post
router.post('/:id/comments', PostController.handleAddComment);

module.exports = router;