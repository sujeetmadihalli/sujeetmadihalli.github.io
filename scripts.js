document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for your message!';
        document.getElementById('formMessage').style.color = '#4CAF50';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = '#f44336';
    }
});
