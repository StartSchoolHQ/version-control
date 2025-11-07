// Simple User Model - Basic version for blog posts feature
// Note: Full User model is in feature/user-management branch

class User {
    constructor(id, username, email, password, createdAt = new Date()) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.isActive = true;
    }

    // Static method to find user by ID
    static findById(id) {
        return mockUsers.find(user => user.id === id) || null;
    }

    // Static method to find user by email
    static findByEmail(email) {
        return mockUsers.find(user => user.email === email) || null;
    }

    // Convert to safe object (no password)
    toSafeObject() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            createdAt: this.createdAt,
            isActive: this.isActive
        };
    }
}

// Mock users for blog demonstration
const mockUsers = [
    new User('1', 'admin', 'admin@blogplatform.com', 'admin123'),
    new User('2', 'johndoe', 'john@example.com', 'password123'),
    new User('3', 'janedoe', 'jane@example.com', 'password456')
];

module.exports = User;