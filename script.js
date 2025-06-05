// ===== MODERN PORTFOLIO SCRIPT =====

class ModernPortfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initScrollProgress();
    this.initScrollAnimations();
    this.initNavigationTracking();
    this.initMobileMenu();
    this.initLoadingScreen();
    this.initParallaxEffects();
    this.initSmoothScrolling();
    this.initTypingAnimation();
  }

  // ===== LOADING SCREEN =====
  initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.classList.add('fade-out');
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }
      }, 1500); // Show loading for 1.5 seconds
    });
  }

  // ===== SCROLL PROGRESS BAR =====
  initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
  }

  // ===== SCROLL ANIMATIONS =====
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Add staggered animation for children
          const children = entry.target.querySelectorAll('.skill-bubble, .project-card, .stat-card');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.animationDelay = `${index * 0.1}s`;
              child.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // ===== NAVIGATION TRACKING =====
  initNavigationTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.querySelector('.nav-container');

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          
          // Update active nav link
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === activeId) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Add scrolled class to nav on scroll
    window.addEventListener('scroll', () => {
      if (navContainer) {
        if (window.scrollY > 50) {
          navContainer.classList.add('scrolled');
        } else {
          navContainer.classList.remove('scrolled');
        }
      }
    });
  }

  // ===== MOBILE MENU =====
  initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });

      // Close menu when clicking on links
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuBtn.classList.remove('active');
          mobileMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenuBtn.classList.remove('active');
          mobileMenu.classList.remove('active');
        }
      });
    }
  }

  // ===== SMOOTH SCROLLING =====
  initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const smoothScroll = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-section');
        smoothScroll(targetId);
      });
    });

    // Scroll indicator click
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        smoothScroll('about');
      });
    }

    // Logo click - scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', () => {
        smoothScroll('hero');
      });
    }
  }

  // ===== PARALLAX EFFECTS =====
  initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.profile-wrapper, .floating-bubble');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        if (element.classList.contains('profile-wrapper')) {
          element.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    });
  }

  // ===== TYPING ANIMATION =====
  initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.textContent = '';
      
      setTimeout(() => {
        let index = 0;
        const typeTimer = setInterval(() => {
          heroTitle.textContent += text[index];
          index++;
          if (index >= text.length) {
            clearInterval(typeTimer);
            heroTitle.classList.add('typing-complete');
          }
        }, 100);
      }, 1000);
    }
  }

  // ===== BUBBLE INTERACTIONS =====
  initBubbleInteractions() {
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    const projectCards = document.querySelectorAll('.project-card');
    const contactCards = document.querySelectorAll('.contact-card');

    // Add ripple effect on click
    const createRipple = (e) => {
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(${x}px, ${y}px) scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    };

    // Add ripple to interactive elements
    [...skillBubbles, ...projectCards, ...contactCards].forEach(element => {
      element.addEventListener('click', createRipple);
    });
  }

  // ===== PERFORMANCE OPTIMIZATIONS =====
  initPerformanceOptimizations() {
    // Throttle scroll events
    let scrollTimer = null;
    const originalScrollHandler = () => {
      this.updateScrollProgress();
      this.updateNavigationOnScroll();
    };

    window.addEventListener('scroll', () => {
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(originalScrollHandler, 10);
    }, { passive: true });

    // Debounce resize events
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer !== null) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  // ===== ACCESSIBILITY ENHANCEMENTS =====
  initAccessibility() {
    // Add keyboard navigation
    const focusableElements = document.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (element.classList.contains('nav-link')) {
            e.preventDefault();
            element.click();
          }
        }
      });
    });

    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-gradient);
      color: white;
      padding: 8px;
      border-radius: 4px;
      text-decoration: none;
      z-index: 10000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // ===== UTILITY METHODS =====
  setupEventListeners() {
    // Contact card clicks
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          const link = card.querySelector('a');
          if (link) {
            link.click();
          }
        }
      });
    });

    // Social bubble hover effects
    const socialBubbles = document.querySelectorAll('.social-bubble');
    socialBubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
        bubble.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
      });
      
      bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = 'translateY(0) scale(1) rotate(0deg)';
      });
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  handleResize() {
    // Recalculate positions and animations on resize
    this.initScrollProgress();
  }

  // ===== ANIMATION STYLES =====
  injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: translate(var(--x), var(--y)) scale(2);
          opacity: 0;
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .typing-complete {
        border-right: 2px solid transparent;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: var(--text-light); }
        51%, 100% { border-color: transparent; }
      }
      
      .skip-link:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// ===== UTILITY FUNCTIONS =====

// Throttle function for performance
function throttle(func, wait) {
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

// Debounce function for performance
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Enhanced scroll to functionality
function scrollToElement(targetId, offset = 100) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// ===== INITIALIZATION =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const portfolio = new ModernPortfolio();
  portfolio.injectAnimationStyles();
  portfolio.initBubbleInteractions();
  portfolio.initPerformanceOptimizations();
  portfolio.initAccessibility();
});

// Handle page refresh to top
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Preload critical images
function preloadImages() {
  const images = [
    'about-pic.png',
    'project-1.png',
    'project-2.png',
    'project-3.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Call preload when page starts loading
preloadImages();

// ===== LEGACY SUPPORT =====

// Fallback for older browsers
if (!window.IntersectionObserver) {
  // Simple fallback for scroll animations
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate');
      }
    });
  });
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ModernPortfolio;
}