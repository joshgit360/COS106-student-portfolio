const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page automatically
    event.preventDefault();
    
    // Grab the values written inside the inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Clear any previous error messages
    errorMessage.innerText = "";
    errorMessage.style.color = "red";

    // Requirement 1: Ensure no field is empty
    if (name === "" || email === "" || phone === "" || message === "") {
        errorMessage.innerText = "Error: All fields are required!";
        return;
    }

    // Requirement 2: Validate email format using a simple pattern match
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "Error: Please enter a valid email address.";
        return;
    }

    // Requirement 3: Ensure phone number contains only digits
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        errorMessage.innerText = "Error: Phone number must contain only numbers.";
        return;
    }

    // If everything passes verification:
    errorMessage.style.color = "green";
    errorMessage.innerText = "Success! Your message has been sent cleanly.";
    contactForm.reset(); // Empties out the form inputs
});
