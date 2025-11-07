// Enhanced JavaScript for Blog Platform
// Training project for StartSchoolHQ

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Blog Platform loaded successfully!");
  console.log("📚 This is a training project demonstrating MVC architecture");

  // Initialize all interactive features
  initSmoothScrolling();
  initButtonAnimations();
  initFormValidation();
  initThemeToggle();
  initScrollToTop();
  initAnimationsOnScroll();
  initTooltips();
  initLoadingStates();

  // Console information for developers
  console.log("🛠️ Tech Stack: Node.js, Express, EJS, HTML/CSS/JS");
  console.log("🏗️ Architecture: MVC Pattern");
  console.log("🌿 Git Workflow: Feature branches with conventional commits");
  console.log("📂 Repository: https://github.com/StartSchoolHQ/version-control");
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Enhanced button animations
function initButtonAnimations() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.98)";
    });
    
    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1)";
    });
    
    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Form validation enhancement
function initFormValidation() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea, select");
    
    inputs.forEach((input) => {
      input.addEventListener("blur", validateField);
      input.addEventListener("input", clearValidationError);
    });
    
    form.addEventListener("submit", function(e) {
      let isValid = true;
      inputs.forEach((input) => {
        if (!validateField.call(input)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        showFormError("Please correct the errors above.");
      }
    });
  });
}

function validateField() {
  const value = this.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Clear previous errors
  clearFieldError(this);

  // Required field validation
  if (this.hasAttribute("required") && !value) {
    errorMessage = "This field is required.";
    isValid = false;
  }

  // Email validation
  if (this.type === "email" && value && !isValidEmail(value)) {
    errorMessage = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (this.type === "password" && value && value.length < 6) {
    errorMessage = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Show error if invalid
  if (!isValid) {
    showFieldError(this, errorMessage);
  }

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(field, message) {
  field.classList.add("error");
  
  let errorElement = field.parentNode.querySelector(".field-error");
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "field-error";
    field.parentNode.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove("error");
  const errorElement = field.parentNode.querySelector(".field-error");
  if (errorElement) {
    errorElement.remove();
  }
}

function clearValidationError() {
  clearFieldError(this);
}

function showFormError(message) {
  // Create or update form error message
  let errorContainer = document.querySelector(".form-error");
  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.className = "form-error";
    document.querySelector("form").prepend(errorContainer);
  }
  
  errorContainer.textContent = message;
  errorContainer.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Dark/Light theme toggle (optional enhancement)
function initThemeToggle() {
  // This would be implemented if we had theme switching
  // For now, just log that the feature is ready
  console.log("� Theme system ready for implementation");
}

// Scroll to top button
function initScrollToTop() {
  // Create scroll to top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "↑";
  scrollBtn.className = "scroll-to-top";
  scrollBtn.setAttribute("title", "Scroll to top");
  document.body.appendChild(scrollBtn);

  // Show/hide based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Animate elements on scroll
function initAnimationsOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe cards and content sections
  const animateElements = document.querySelectorAll(
    ".feature-card, .post-card, .user-card, .contact-card"
  );
  
  animateElements.forEach((el) => {
    el.classList.add("animate-ready");
    observer.observe(el);
  });
}

// Initialize tooltips for enhanced UX
function initTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");
  
  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", showTooltip);
    element.addEventListener("mouseleave", hideTooltip);
  });
}

function showTooltip(e) {
  const text = e.target.getAttribute("data-tooltip");
  if (!text) return;

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = text;
  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = e.target.getBoundingClientRect();
  tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";

  setTimeout(() => tooltip.classList.add("visible"), 10);
}

function hideTooltip() {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}

// Loading states for forms and actions
function initLoadingStates() {
  const forms = document.querySelectorAll("form");
  
  forms.forEach((form) => {
    form.addEventListener("submit", function() {
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Processing...";
        
        // Reset after 3 seconds (in case of no redirect)
        setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 3000);
      }
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
