document.addEventListener("DOMContentLoaded", function() {
  // Newsletter form validation and submission
  var newsletterInputs = document.querySelectorAll('#newsletterForm input');
  var newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', function(event) {
    validateForm(event, newsletterInputs, 'Thank you for subscribing!');
  });

  // Contact form validation and submission
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Variables to store form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Collection of fields for validation
    var fields = [
      { id: 'name', value: name, message: 'Name is required!' },
      { id: 'email', value: email, message: 'Email is required!' },
      { id: 'message', value: message, message: 'Message is required!' }
    ];
    // Loop and validate
    if (validateContactForm(fields) && validateEmail(email)) {
      console.log('Form is valid. Implement form submission logic here.');
    }
  });

  // Reusable form validation function
  function validateForm(event, inputs, successMessage) {
    event.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        alert('Please fill out the ' + inputs[i].name + ' field.');
        return false;
      }
    }
    alert(successMessage);
  }

  // Specific validation for the contact form
  function validateContactForm(fields) {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        alert(fields[i].message);
        document.getElementById(fields[i].id).focus();
        return false;
      }
    }
    return true;
  }

  // Email validation
  function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      alert('Please enter a valid email address.');
      document.getElementById('email').focus();
      return false;
    }
    return true;
  }
});
