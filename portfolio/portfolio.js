function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log form values (you can modify this part to send the form data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Optionally, display a confirmation message to the user
    alert('Message sent successfully!');
}

// Add event listener to the form submit button
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
