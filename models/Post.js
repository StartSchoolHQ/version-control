// Simple Post Model - No database, just structure demonstration
// This is a non-functional training project focusing on MVC architecture

class Post {
  constructor(id, title, content, authorId, createdAt = new Date()) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.createdAt = createdAt;
    this.updatedAt = createdAt;
    this.isPublished = true;
    this.views = 0;
  }

  // Static method to find post by ID
  static findById(id) {
    // In real app: query database
    return mockPosts.find((post) => post.id === id) || null;
  }

  // Static method to get all posts
  static findAll() {
    // In real app: query database with sorting
    return mockPosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  // Static method to find posts by author
  static findByAuthor(authorId) {
    // In real app: query database
    return mockPosts.filter((post) => post.authorId === authorId);
  }

  // Static method to create new post
  static create(postData) {
    // In real app: save to database
    const newPost = new Post(
      Date.now().toString(), // Simple ID generation
      postData.title,
      postData.content,
      postData.authorId
    );
    mockPosts.push(newPost);
    return newPost;
  }

  // Instance method to update post
  update(postData) {
    // In real app: update database
    if (postData.title) this.title = postData.title;
    if (postData.content) this.content = postData.content;
    this.updatedAt = new Date();
    return this;
  }

  // Instance method to increment views
  incrementViews() {
    this.views++;
    return this;
  }

  // Get excerpt for listing
  getExcerpt(length = 150) {
    return this.content.length > length
      ? this.content.substring(0, length) + "..."
      : this.content;
  }

  // Convert to safe object with author info
  toSafeObject() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      authorId: this.authorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isPublished: this.isPublished,
      views: this.views,
    };
  }
}

// Mock data for demonstration (in real app: use database)
const mockPosts = [
  new Post(
    "1",
    "Welcome to Our Blog Platform",
    "This is our first blog post demonstrating the MVC architecture pattern. In this platform, we showcase how to properly separate concerns between Models (data structure), Views (presentation), and Controllers (business logic). This post serves as an example of how blog content would be stored and displayed in a real application.",
    "1", // admin user
    new Date("2025-11-01")
  ),
  new Post(
    "2",
    "Understanding MVC Architecture",
    "The Model-View-Controller (MVC) pattern is a fundamental architectural pattern in web development. The Model handles data and business logic, the View manages the user interface and presentation, and the Controller acts as an intermediary between Model and View. This separation makes applications more maintainable, testable, and scalable.",
    "1", // admin user
    new Date("2025-11-03")
  ),
  new Post(
    "3",
    "Git Workflow Best Practices",
    "Proper version control is crucial for collaborative development. We demonstrate feature branch workflows, conventional commit messages, and pull request processes. This training project showcases how to structure commits, manage branches effectively, and maintain a clean project history that facilitates code review and collaboration.",
    "2", // johndoe user
    new Date("2025-11-05")
  ),
  new Post(
    "4",
    "Building Scalable Web Applications",
    "When developing web applications, scalability should be considered from the beginning. This includes proper code organization, efficient database design, and thoughtful architecture decisions. Our blog platform demonstrates these principles through clean separation of concerns and modular code structure.",
    "3", // janedoe user
    new Date("2025-11-07")
  ),
];

module.exports = Post;
