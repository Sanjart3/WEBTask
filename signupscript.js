document.getElementById('signup-form').addEventListener('submit', function(event){
    event.preventDefault();

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(firstname.length>3 && lastname.length>3 && username.length>3 && email.includes('@') && password.length>=5){
        alert('Sign Up successful!');
    } else{
        document.getElementById('error-message').textContent = 'Something wrong happened!';
    }
});
