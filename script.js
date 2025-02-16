// Simple form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert("Thank you for your message! We'll get back to you soon.");
    document.getElementById('contact-form').reset();
  } else {
    alert("Please fill out all fields.");
  }
});
