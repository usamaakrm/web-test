document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Validate name
      const nameInput = form.elements['name'];
      if (!nameInput.value.trim()) {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
      }

      // Validate email
      const emailInput = form.elements['email'];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
      }

      // Validate phone
      const phoneInput = form.elements['phone'];
      const phoneRegex = /^\d{10}$/; // Assuming 10 digit phone number
      if (!phoneRegex.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        phoneInput.focus();
        return false;
      }

      if (document.getElementById("flexCheckDefault").checked == false) {
        alert('Accept the terms and conditions to proceed.');
        return false;
      }

    

      // If all validations pass, submit the form
      // You may also choose to submit the form using AJAX here
      // form.submit();
      alert('Approved! We will contact you within 48 hours to fulfill your requirement');
    });
  });