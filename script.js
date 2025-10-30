document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMessage = document.getElementById("successMessage");

  // Clear old messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Validate Name
  if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
  }

  // Validate Email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
  } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address";
      isValid = false;
  }

  // Validate Password
  if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
  } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
      isValid = false;
  }

  // Confirm Password
  if (confirmPassword === "") {
      confirmPasswordError.textContent = "Please confirm your password";
      isValid = false;
  } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match";
      isValid = false;
  }

  // If all fields valid
  if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      document.getElementById("registrationForm").reset();
  }
});