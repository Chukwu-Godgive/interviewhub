// This validates Sign Up page
 function signUpValidator() {
    let name = document.getElementById("getFullName").value;
    let email = document.getElementById("getEmail").value.trim();
    let password = document.getElementById("getPassword").value;
    let confirmPassword = document.getElementById("getConfirmPassword").value;

    let storedEmail = localStorage.getItem("storedEmail")
    let storedPassword = localStorage.getItem("storedPassword")

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    if(name=="") {
        alert("Please enter your name");
    }
    else if(email=="") {
        alert("Please enter your email");
    }
    else if(!isEmailValid(email)) {
        alert("Your email is incorrect");
    }
    else if(email==storedEmail) {
        alert("Email already exist!");
    }
    else if(password=="") {
        alert("Please enter your password");
    }
    else if(password.length < 6) {
        alert("Password entered is below 6");
    }
    else if(confirmPassword=="") {
        alert("Please enter confirm password");
    }
    else if(confirmPassword != password) {
        alert("Password did not Match");
    }
    else {
        localStorage.setItem("storedEmail", email);
        localStorage.setItem("storedPassword", password);

    let fullName = document.getElementById("fullName").value;
    let fullEmail = document.getElementById("fullEmail").value;
    let fullCountry = document.getElementById("fullCountry").value;

    localStorage.setItem("profileName", fullName);
    localStorage.setItem("profileEmail", fullEmail);
    localStorage.setItem("profileCountry", fullCountry);

    localStorage.getItem("profileName");
    localStorage.getItem("profileEmail");
    localStorage.getItem("profileCountry");

        location.href = "../Dashboard/dashboard.html"
    }


    
}




 // This validates the login page
function loginValidator() {
    let email = document.getElementById("getEmail").value;
    let password = document.getElementById("getPassword").value;

    let storedEmailLogin = localStorage.getItem("storedEmail")
    let storedPasswordLogin = localStorage.getItem("storedPassword")

    if(email=="") {
        alert("Please enter your password");
    }
    else if(password=="") {
        alert("Please enter your password");
    }
    else if(email != storedEmailLogin && password != storedPasswordLogin) {
        alert("Incorrect email or password");
    }
    else {
        location.href = "../Dashboard/dashboard.html"
    }
}





// For Profile page
function checkitout() {
    // This displays the score of the result
    document.getElementById("score").innerHTML = localStorage.getItem("examScore")

    // This Checkmates the score level for grade output
    let grade = localStorage.getItem("examScore")
    if(grade >= 80) {
        let excellent = "Excellent"
        document.getElementById("grade").innerHTML = excellent
    }else if (grade >= 60) {
        let good = "Good"
        document.getElementById("grade").innerHTML = good
    }else if (grade >= 40) {
        let credit = "Credit"
        document.getElementById("grade").innerHTML = credit
    }else if (grade >= 20) {
        let pass = "Pass"
        document.getElementById("grade").innerHTML = pass
    }else{
        let fail = "Failed"
        document.getElementById("grade").innerHTML = fail
    }
}



 // This Displays the details to dashboard when clicked
function viewProfile() {
    document.getElementById("fullNames").innerHTML = localStorage.getItem("profileName")
    
    document.getElementById("fullEmails").innerHTML = localStorage.getItem("profileEmail")
    
    document.getElementById("fullCountrys").innerHTML = localStorage.getItem("profileCountry")
}