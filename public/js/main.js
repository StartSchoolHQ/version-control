// Main JavaScript for Blog Platform
// Training project for StartSchoolHQ

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Blog Platform loaded successfully!');
    console.log('📚 This is a training project demonstrating MVC architecture');
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add click animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Console information for developers
    console.log('🛠️ Tech Stack: Node.js, Express, EJS, HTML/CSS/JS');
    console.log('🏗️ Architecture: MVC Pattern');
    console.log('🌿 Git Workflow: Feature branches with conventional commits');
    console.log('📂 Repository: https://github.com/StartSchoolHQ/version-control');
});