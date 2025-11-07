// Post Controller - Simple blog functionality
// Training project - demonstrates MVC pattern with blog operations

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

class PostController {
  // Display all posts (blog home)
  static getAllPosts(req, res) {
    try {
      const posts = Post.findAll();

      // Add author information to each post
      const postsWithAuthors = posts.map((post) => {
        const author = User.findById(post.authorId);
        return {
          ...post.toSafeObject(),
          author: author ? author.toSafeObject() : { username: "Unknown" },
          excerpt: post.getExcerpt(),
        };
      });

      res.render("posts/index", {
        title: "Blog Posts - Blog Platform",
        posts: postsWithAuthors,
        currentPage: "posts",
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).send("Error loading posts");
    }
  }

  // Display single post with comments
  static getPost(req, res) {
    try {
      const post = Post.findById(req.params.id);
      if (!post) {
        return res.status(404).send("Post not found");
      }

      // Increment view count
      post.incrementViews();

      // Get author information
      const author = User.findById(post.authorId);

      // Get comments for this post
      const comments = Comment.findByPost(post.id);

      // Add author info to each comment
      const commentsWithAuthors = comments.map((comment) => {
        const commentAuthor = User.findById(comment.authorId);
        return {
          ...comment.toSafeObject(),
          author: commentAuthor
            ? commentAuthor.toSafeObject()
            : { username: "Unknown" },
        };
      });

      res.render("posts/single", {
        title: `${post.title} - Blog Platform`,
        post: post.toSafeObject(),
        author: author ? author.toSafeObject() : { username: "Unknown" },
        comments: commentsWithAuthors,
        commentCount: commentsWithAuthors.length,
        currentPage: "posts",
      });
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).send("Error loading post");
    }
  }

  // Show create post form (simplified)
  static showCreateForm(req, res) {
    res.render("posts/create", {
      title: "Create New Post - Blog Platform",
      currentPage: "posts",
      error: null,
    });
  }

  // Handle post creation (simplified)
  static handleCreate(req, res) {
    try {
      const { title, content, authorId } = req.body;

      // Simple validation
      if (!title || !content) {
        return res.render("posts/create", {
          title: "Create New Post - Blog Platform",
          currentPage: "posts",
          error: "Title and content are required",
        });
      }

      // Create post (using author ID 1 for demo)
      const newPost = Post.create({
        title,
        content,
        authorId: authorId || "1",
      });

      console.log(`New post created: ${newPost.title}`);
      res.redirect(`/posts/${newPost.id}`);
    } catch (error) {
      console.error("Post creation error:", error);
      res.status(500).send("Error creating post");
    }
  }

  // Handle comment creation (simplified)
  static handleAddComment(req, res) {
    try {
      const { content, authorId } = req.body;
      const postId = req.params.id;

      // Simple validation
      if (!content) {
        return res.redirect(`/posts/${postId}?error=Comment content required`);
      }

      // Verify post exists
      const post = Post.findById(postId);
      if (!post) {
        return res.status(404).send("Post not found");
      }

      // Create comment (using author ID 1 for demo)
      const newComment = Comment.create({
        content,
        authorId: authorId || "1",
        postId,
      });

      console.log(`New comment added to post ${postId}`);
      res.redirect(`/posts/${postId}#comment-${newComment.id}`);
    } catch (error) {
      console.error("Comment creation error:", error);
      res.status(500).send("Error adding comment");
    }
  }

  // Get posts by author
  static getPostsByAuthor(req, res) {
    try {
      const authorId = req.params.authorId;
      const author = User.findById(authorId);

      if (!author) {
        return res.status(404).send("Author not found");
      }

      const posts = Post.findByAuthor(authorId);
      const postsWithExcerpts = posts.map((post) => ({
        ...post.toSafeObject(),
        excerpt: post.getExcerpt(),
      }));

      res.render("posts/by-author", {
        title: `Posts by ${author.username} - Blog Platform`,
        posts: postsWithExcerpts,
        author: author.toSafeObject(),
        currentPage: "posts",
      });
    } catch (error) {
      console.error("Error fetching posts by author:", error);
      res.status(500).send("Error loading posts");
    }
  }
}

module.exports = PostController;
