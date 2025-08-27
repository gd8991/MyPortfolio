// Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .tech-item').forEach(el => {
      observer.observe(el);
    });

    // Observe social links separately for staggered animation
    document.querySelectorAll('.social-links a').forEach(el => {
      observer.observe(el);
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.querySelector('.navbar');
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      lastScrollTop = scrollTop;
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero');
      const speed = scrolled * 0.5;
      parallax.style.backgroundPosition = `center ${speed}px`;
    });