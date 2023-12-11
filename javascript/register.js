function checkInformation() {
    //Register form variables
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordConstraints = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (firstName === '' || lastName === '' || email === '' || password === '' || phone === '') {
        alert('Please fill in all fields.');
        return;
    }

    else if (firstName.length < 5) {
        alert("First name should be longer")
    }
    else if (firstName.length > 20) {
        alert("First name should contain less characters")
    }
    else if (lastName.length < 5) {
        alert("Last name should be longer")
    }
    else if (lastName.length > 20) {
        alert("Last name should contain less characters")
    }  
    else if (!emailRegex.test(email)) { 
        alert("Invalid email")
    }
    else if (!passwordConstraints.test(password)) {
        alert("Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit")
    }
    else {
        alert("You are successfully registered!")
    }

    function checkLoginInformation() {
        var loginEmail = document.getElementById('loginEmail').value;
        var loginPassword = document.getElementById('loginPassword').value;
        if (loginEmail === '' || loginPassword === '') {
            alert('Please enter both email and password.');
            return;
        }
    }
}
    
    function switchForm(formId) {
            document.getElementById('registerForm').style.display = formId === 'registerForm' ? 'block' : 'none';
            document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
        }
