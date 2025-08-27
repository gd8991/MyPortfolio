// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Show more projects
document.querySelector('.projects .btn .btn-nav').addEventListener('click', () => {
  // Expand to show more projects...
});
