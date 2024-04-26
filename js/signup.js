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

  $(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("(Show Less)");
    } else {
        $(this).text("(Show More)");
    }

    $(".text").toggleClass("show-more-height");
});

$(document).ready(function(){
  var hiddenSection = document.getElementById('hidden-section-data');
  hiddenSection.style.display = 'none';

 var btn = document.getElementById("showHide");


// When the user clicks the button, open the modal 
 btn.onclick = function() {
  var hiddenSection = document.getElementById('hidden-section-data');
  if( hiddenSection.style.display == "none") {
      hiddenSection.style.display = 'block';  
      document.getElementById("showHide").innerHTML = '<a id="showHide"> <p class="border-bottom border-2 text-center border-secondary mx-auto mt-2" style="width: fit-content;color: #5479F7;">Show less</p> </a>';
  } else {
      hiddenSection.style.display = 'none';
      document.getElementById("showHide").innerHTML = '<a id="showHide"> <p class="border-bottom border-2 text-center border-secondary mx-auto mt-2" style="width: fit-content;color: #5479F7;">Show More</p> </a>';

  }
 }   
 var elements = document.getElementsByClassName("assetClick");

 var myFunction = function() {
       
   window.location.href = "uncllaimed.htm"
 };

 for (var i = 0; i < elements.length; i++) {
     elements[i].addEventListener('click', myFunction, false);
 }


});