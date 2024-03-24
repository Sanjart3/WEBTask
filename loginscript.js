document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard or perform other actions
        alert('Login successful!');
    } else {
        // Display error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});