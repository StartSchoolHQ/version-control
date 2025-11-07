Create a non-functional web application codebase following the model-view-controller pattern to demonstrate understanding of application architecture, version control, and collaborative development workflows. This is a training exercise for cross-team collaboration practices.

The application should include both frontend and backend components with proper separation of concerns. The codebase will be added to a GitHub repository under the StartSchoolHQ organization to practice professional git workflows including branching strategies, commit practices, and pull request procedures.

---

### **Technical Requirements**

**Backend:**

- Language: Node.js with Express framework
- Structure: Follow MVC pattern with separate folders for models, views, and controllers
- Include: Routes configuration, middleware setup, basic error handling
- Dependencies: Package.json with necessary dependencies listed

**Frontend:**

- Basic HTML templates for views
- CSS styling files
- JavaScript for client-side interactions
- Responsive layout structure

**Application Concept:**

- Simple task management system or blog platform
- Minimum 3-4 different routes/pages
- Example entities: users, posts/tasks, comments

---

### **Acceptance Criteria**

1. Repository setup:
    - New repository “version-control” created under https://github.com/StartSchoolHQ
    - Repository includes proper README.md with project description and setup instructions
    - .gitignore file configured for Node.js projects
2. Code structure requirements:
    - Backend follows MVC pattern with clearly separated directories
    - Models folder contains at least 2 model definitions
    - Controllers folder contains corresponding controller logic
    - Views folder contains template files
    - Routes properly defined and organized
    - Configuration files present (package.json, environment config example)
3. Git workflow requirements:
    - Minimum 15 meaningful commits following conventional commit standards
    - At least 3 separate branches created (e.g., main, develop, feature/user-management)
    - Commit messages follow format: type(scope): description
    - Each commit represents a logical unit of work
4. Branching strategy:
    - Main branch contains stable code
    - Develop branch for integration
    - Feature branches for specific functionality
    - Branch naming follows convention: feature/, bugfix/, hotfix/
5. Pull request requirements:
    - At least one pull request created from feature branch to develop/main
    - Pull request includes descriptive title and description
    - Description explains what changes were made and why
    - Pull request demonstrates understanding of code review process