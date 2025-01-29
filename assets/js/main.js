// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      // Implement search functionality here
      console.log('Searching for:', this.value);
  }
});

// Newsletter form
const emailInput = document.querySelector('input[type="email"]');
const subscribeButton = emailInput?.nextElementSibling;

if (subscribeButton) {
  subscribeButton.addEventListener('click', function() {
      const email = emailInput.value;
      if (email && email.includes('@')) {
          alert('Bedankt voor je inschrijving!');
          emailInput.value = '';
      } else {
          alert('Voer een geldig e-mailadres in');
      }
  });
}