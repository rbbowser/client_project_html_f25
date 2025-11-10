//UMSI Career Development Resource Hub

//update year in footer
document.addEventListener('DOMContentLoaded', function() {
    //set current year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    //form validation process
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            //get all required fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const studentType = document.getElementById('student-type').value;
            const topic = document.getElementById('topic').value;
            const message = document.getElementById('message').value.trim();
            
            //validate
            if (!name || !email || !studentType || !topic || !message) {
                alert('Please fill out all required fields.');
                return;
            }
            
            //check email format
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            //show success message
            const successDiv = document.getElementById('success-message');
            successDiv.style.display = 'block';
            successDiv.textContent = 'Thank you! Your message has been sent. A career coach will contact you soon.';
            
            //reset form
            form.reset();
            
            //hide message after 5 seconds
            setTimeout(function() {
                successDiv.style.display = 'none';
            }, 5000);
        });
    }
});
