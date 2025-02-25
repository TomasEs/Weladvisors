document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Hero Email Form
        const heroEmailForm = document.querySelector('.email-form');
        if (heroEmailForm) {
            heroEmailForm.addEventListener('submit', function(event) {
                event.preventDefault();
    
                const emailInput = document.getElementById('hero-email-input');
                const email = emailInput.value;
    
                if (!email) {
                    alert('Por favor, introduce tu correo electrónico.');
                    return;
                }
    
                if (!isValidEmail(email)) {
                    alert('Por favor, introduce un correo electrónico válido.');
                    return;
                }
    
                // Show success message
                document.getElementById('hero-email-success').style.display = 'block';
                emailInput.value = '';  // Clear the input
    
                // Optionally, hide the success message after a few seconds
                setTimeout(function() {
                    document.getElementById('hero-email-success').style.display = 'none';
                }, 5000); // Hide after 5 seconds
    
            });
        }
    
        // Contact Form
        const contactForm = document.querySelector('#contact-form form[name="contact"]');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
    
                // Show success message
                document.getElementById('contact-success').style.display = 'block';
    
                // Clear the form inputs (optional)
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
    
                // Optionally, hide the success message after a few seconds
                setTimeout(function() {
                    document.getElementById('contact-success').style.display = 'none';
                }, 5000); // Hide after 5 seconds
            });
        }
    
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });