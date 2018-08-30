var validation = function() {
    var username = document.getElementById('username').value;

    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirmPassword').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    
    //validation
    
    //username
    if (username == "") {
        document.getElementById('username-error').innerHTML = "** Please Enter Username";
        return false;
    } else {
        if (username.length < 3 || username.length > 20) {
            document.getElementById('username-error').innerHTML = "** Password Must Be 2 - 20 characters";
            return false;
        }
        if (!isNaN(username)) {
            document.getElementById('username-error').innerHTML = "** Username Cannot Be Numbers or Cannot Start With Digit";
            return false;
        }        
        if (!isNaN(username[0])) {
            document.getElementById('username-error').innerHTML = "** Username Should Not Start With Digit";
            return false;
        }
        
        document.getElementById('username-error').classList.remove('text-danger');
        document.getElementById('username-error').classList.add('text-success');
        document.getElementById('username-error').innerHTML = "looks good";

    }
    
    //password
    if (password === "") {
        document.getElementById('password-error').innerHTML = "* Password Field Cannot Be Empty";
        return false;
    } else {
        if (password.length < 8) {
            document.getElementById('password-error').innerHTML = "* Password Minimum Length is 8";
            return false;
        } else if (password === "12345678") {
            document.getElementById('password-error').innerHTML = "12345678 is Not Allowed";
            return false;
        }
        document.getElementById('password-error').classList.remove('text-danger');
        document.getElementById('password-error').classList.add('text-success');
        document.getElementById('password-error').innerHTML = "looks good";        
        
    }
    
    //confirmPassword
    if (confirmPassword === "") {
        document.getElementById('confirmPassword-error').innerHTML = "Confirm Password Cannot Be Empty";
        return false
    } else {
        if (password !== confirmPassword) {
            document.getElementById('confirmPassword-error').innerHTML = "Password Do Not Match";
            return false;
        }
        
        document.getElementById('confirmPassword-error').classList.remove('text-danger');
        document.getElementById('confirmPassword-error').classList.add('text-success');
        document.getElementById('confirmPassword-error').innerHTML = "Password Matched";        
    }
    
    //email 
    if (email === "") {
        document.getElementById('email-error').innerHTML = "Email Field Cannot Be Empty";
        return false;
    } else {
        //test@example.com or .in
        if (email.indexOf('@') < 0) {
            document.getElementById('email-error').innerHTML = "@ Not Found Invalid Email";
            return false;
        }
        if (email.indexOf('@') === 0) {
            document.getElementById('email-error').innerHTML = "@ Should Not Be At Start Invalid Email";
            return false;
        }
        if ((email.charAt(email.length - 4) !== ".") && (email.charAt(email.length - 3) !== "."))
        {
            document.getElementById('email-error').innerHTML = "Invalid Email";
            return false;
        }
        
        document.getElementById('email-error').classList.remove('text-danger');
        document.getElementById('email-error').classList.add('text-success');
        document.getElementById('email-error').innerHTML = "looks good";        
    }
    
    //phone
    if (phone === "") {
        document.getElementById('phone-error').innerHTML = "Phone Cannot Be Empty";
        return false;
    } else {
        if (phone.length !== 10) {
            document.getElementById('phone-error').innerHTML = "Phone Number Must Be 10 Digits";
            return false;
        }
        
        document.getElementById('phone-error').classList.remove('text-danger');
        document.getElementById('phone-error').classList.add('text-success');
        document.getElementById('phone-error').innerHTML = "looks good";        
    }
    
};

