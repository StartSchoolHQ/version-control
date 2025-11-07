# Version Control Blog Platform

A simple blog platform demonstrating MVC (Model-View-Controller) architecture and professional git workflows. This project serves as a training exercise for cross-team collaboration practices and version control best practices.

## 🚀 Project Overview

- **Type**: Simple blog platform (non-functional, structure-focused)
- **Architecture**: MVC Pattern
- **Tech Stack**: Node.js, Express.js, EJS, HTML/CSS/JavaScript
- **Purpose**: Training exercise for git workflows and application architecture

## 📁 Project Structure

```
version-control-blog/
├── controllers/         # Business logic
├── models/             # Data models
├── views/              # EJS templates
├── routes/             # Route definitions
├── public/             # Static assets
│   ├── css/           # Stylesheets
│   └── js/            # Client-side JavaScript
├── app.js             # Main application file
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## 🎯 Features

- **Home Page**: Welcome page with blog overview
- **Posts**: Blog post listing and individual post views
- **Users**: Basic user management system
- **Comments**: Comment system for blog posts
- **About & Contact**: Static informational pages

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/StartSchoolHQ/version-control.git
   cd version-control
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 🌿 Git Workflow

This project demonstrates professional git workflows including:

- **Branching Strategy**: main → develop → feature branches
- **Conventional Commits**: Standardized commit message format
- **Pull Requests**: Code review and collaboration practices
- **Version Control**: Proper project versioning and releases

### Branch Structure
```
main (stable)
├── develop (integration)
    ├── feature/user-management
    ├── feature/blog-posts
    └── feature/frontend-styling
```

## 📚 Learning Objectives

- Understanding MVC architecture patterns
- Professional git workflow practices
- Collaborative development processes
- Code organization and project structure
- Version control best practices

## 🤝 Contributing

This is a training project for StartSchoolHQ. Follow the established git workflow:

1. Create feature branches from `develop`
2. Use conventional commit messages
3. Submit pull requests for code review
4. Merge to `develop` after approval

## 📄 License

MIT License - This project is for educational purposes.

---

**StartSchoolHQ Training Project** | Version Control & Collaborative Development