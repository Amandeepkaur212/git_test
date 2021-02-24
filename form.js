function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var language = document.contactForm.language.value;
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var password = document.contactForm.password.value;
    
	// Defining error variables with a default value
    var languageErr = nameErr = emailErr = mobileErr = passwordErr = true;

    // Validate language
    if(language == "Select") {
        printError("languageErr", "Please select your language");
    } else {
        printError("languageErr", "");
        languageErr = false;
    }
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
     // Validate mobile number
     if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password of five digits");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    

    // Prevent the form from being submitted if there are any errors
    if((languageErr || nameErr || emailErr || mobileErr || passwordErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Language: " + language + "\n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Password: " + password + "\n";
                
                 
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    };