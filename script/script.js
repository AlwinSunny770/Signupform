function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get form elements
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  // Simple validation example (customize as needed)
  if (!firstName) {
    alert("Please enter your First Name");
    return;
  }

  if (!lastName) {
    alert("Please enter your Last Name");
    return;
  }

  if (!email) {
    alert("Please enter your Email");
    return;
  }

  // Email validation
  if (!isValidEmail(email)) {
    alert("Please enter a valid Email address");
    return;
  }

  if (!password) {
    alert("Please enter your Password");
    return;
  }

  // Password validation
  if (!isValidPassword(password)) {
    alert(
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
    );
    return;
  }

  if (!password2) {
    alert("Please confirm your Password");
    return;
  }

  if (password !== password2) {
    alert("Passwords do not match");
    return;
  }

  // If all validations pass, you can submit the form or perform additional actions
  alert("Form submitted successfully!");
  document.getElementById("signup-form").reset(); // Reset the form after submission
}

// Email validation function
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation function
function isValidPassword(password) {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

document.querySelector(".signupForm").addEventListener("submit", (e) => {
  validateForm(e);
});
