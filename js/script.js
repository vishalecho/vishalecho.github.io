// DOM elements
const nav = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links a');
const backToTopBtn = document.getElementById('back-to-top');

// Mobile navigation toggle
function toggleMobileNav() {
  const navList = document.querySelector('.nav-links');
  navList.classList.toggle('active');
}

// Smooth scroll for anchor links
function smoothScroll(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

// Update active navigation link based on scroll position
function updateActiveNav() {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('section[id]');
  const headerOffset = 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerOffset;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Initialize observers
function initObservers() {
  // Observe hero content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    observer.observe(heroContent);
  }

  // Observe section content
  document.querySelectorAll('.section__content').forEach(content => {
    observer.observe(content);
  });

  // Observe project cards
  document.querySelectorAll('.project-card, .experience-item').forEach(item => {
    observer.observe(item);
  });
}

// Sticky navigation
function initStickyNav() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Back to top button
function initBackToTop() {
  if (!backToTopBtn) return;

  const btn = backToTopBtn || createBackToTopButton();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Create back to top button dynamically if not in HTML
function createBackToTopButton() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  `;
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--color-accent);
    color: white;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all 0.2s ease;
    z-index: 999;
  `;
  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = '#1d4ed8';
    btn.style.transform = 'translateY(-4px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = '';
    btn.style.transform = '';
  });

  document.body.appendChild(btn);
  return btn;
}

// Form handling (if form exists)
function initFormHandling() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    // For static site: open email client
    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:vishal.kumar@example.com?subject=${subject}&body=${body}`;

    showNotification('Opening email client...', 'success');
    form.reset();
  });
}

// Utility functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'success' ? 'var(--color-accent)' : type === 'error' ? '#dc2626' : 'var(--color-accent)'};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    z-index: 10000;
    font-weight: 500;
    animation: slideDown 0.3s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Debounce utility
function debounce(func, wait = 100) {
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

// Initialize everything
function init() {
  // Mobile menu button
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileNav);
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navList = document.querySelector('.nav-links');
      if (navList) navList.classList.remove('active');
    });
  });

  // Event listeners
  document.addEventListener('click', smoothScroll);

  // Initialize features
  initObservers();
  initStickyNav();
  initBackToTop();
  initFormHandling();

  // Update active nav on scroll (with debounce)
  const debouncedUpdate = debounce(updateActiveNav, 50);
  window.addEventListener('scroll', debouncedUpdate);

  // Add CSS for animations if not already in stylesheet
  if (!document.querySelector('#animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
      @keyframes slideDown {
        from { transform: translate(-50%, -20px); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
      }
      .section__content, .project-card, .experience-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .section__content.is-visible, .project-card.is-visible, .experience-item.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
}

// Run init when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}