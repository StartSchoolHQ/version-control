// Simple User Model - No database, just structure demonstration
// This is a non-functional training project focusing on MVC architecture

class User {
  constructor(id, username, email, password, createdAt = new Date()) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password; // In real app: hash this!
    this.createdAt = createdAt;
    this.isActive = true;
  }

  // Static method to simulate finding a user
  static findById(id) {
    // In real app: query database
    return mockUsers.find((user) => user.id === id) || null;
  }

  // Static method to simulate finding by email
  static findByEmail(email) {
    // In real app: query database
    return mockUsers.find((user) => user.email === email) || null;
  }

  // Static method to simulate user creation
  static create(userData) {
    // In real app: save to database
    const newUser = new User(
      Date.now().toString(), // Simple ID generation
      userData.username,
      userData.email,
      userData.password
    );
    mockUsers.push(newUser);
    return newUser;
  }

  // Static method to get all users
  static findAll() {
    // In real app: query database
    return mockUsers;
  }

  // Instance method to update user
  update(userData) {
    // In real app: update database
    if (userData.username) this.username = userData.username;
    if (userData.email) this.email = userData.email;
    return this;
  }

  // Convert to safe object (no password)
  toSafeObject() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      createdAt: this.createdAt,
      isActive: this.isActive,
    };
  }
}

// Mock data for demonstration (in real app: use database)
const mockUsers = [
  new User("1", "admin", "admin@blogplatform.com", "admin123"),
  new User("2", "johndoe", "john@example.com", "password123"),
  new User("3", "janedoe", "jane@example.com", "password456"),
];

module.exports = User;
