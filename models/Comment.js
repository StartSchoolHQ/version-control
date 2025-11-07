// Simple Comment Model - No database, just structure demonstration
// This is a non-functional training project focusing on MVC architecture

class Comment {
  constructor(id, content, authorId, postId, createdAt = new Date()) {
    this.id = id;
    this.content = content;
    this.authorId = authorId;
    this.postId = postId;
    this.createdAt = createdAt;
    this.updatedAt = createdAt;
    this.isApproved = true; // Simple approval system
  }

  // Static method to find comment by ID
  static findById(id) {
    // In real app: query database
    return mockComments.find((comment) => comment.id === id) || null;
  }

  // Static method to find comments by post
  static findByPost(postId) {
    // In real app: query database with sorting
    return mockComments
      .filter((comment) => comment.postId === postId && comment.isApproved)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  // Static method to find comments by author
  static findByAuthor(authorId) {
    // In real app: query database
    return mockComments.filter((comment) => comment.authorId === authorId);
  }

  // Static method to create new comment
  static create(commentData) {
    // In real app: save to database
    const newComment = new Comment(
      Date.now().toString(), // Simple ID generation
      commentData.content,
      commentData.authorId,
      commentData.postId
    );
    mockComments.push(newComment);
    return newComment;
  }

  // Instance method to update comment
  update(commentData) {
    // In real app: update database
    if (commentData.content) this.content = commentData.content;
    this.updatedAt = new Date();
    return this;
  }

  // Instance method to approve/disapprove comment
  setApproval(approved) {
    this.isApproved = approved;
    return this;
  }

  // Convert to safe object
  toSafeObject() {
    return {
      id: this.id,
      content: this.content,
      authorId: this.authorId,
      postId: this.postId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isApproved: this.isApproved,
    };
  }
}

// Mock data for demonstration (in real app: use database)
const mockComments = [
  new Comment(
    "1",
    "Great introduction to MVC! This really helps understand the architecture pattern.",
    "2", // johndoe
    "1", // Welcome post
    new Date("2025-11-02")
  ),
  new Comment(
    "2",
    "Thanks for sharing this. The separation of concerns is so important in web development.",
    "3", // janedoe
    "1", // Welcome post
    new Date("2025-11-02T10:30:00")
  ),
  new Comment(
    "3",
    "Excellent explanation of MVC! I've been struggling with this concept and this post makes it clear.",
    "3", // janedoe
    "2", // MVC Architecture post
    new Date("2025-11-04")
  ),
  new Comment(
    "4",
    "The git workflow tips are very practical. This will help our team collaboration a lot.",
    "1", // admin
    "3", // Git Workflow post
    new Date("2025-11-06")
  ),
  new Comment(
    "5",
    "Looking forward to implementing these scalability principles in our next project.",
    "2", // johndoe
    "4", // Scalable Apps post
    new Date("2025-11-07T09:15:00")
  ),
  new Comment(
    "6",
    "This blog platform itself is a great example of what you're teaching. Well done!",
    "1", // admin
    "4", // Scalable Apps post
    new Date("2025-11-07T14:20:00")
  ),
];

module.exports = Comment;
