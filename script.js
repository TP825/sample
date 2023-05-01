function validateName() {
    var nameVal = document.contact.name.value;
    var nameParts = nameVal.split(" ");
    var fname = nameParts[0];
    var lname = nameParts[1];
    var length = nameParts.length;
    if (length < 2) {
        document.getElementById("name").nextSibling.innerHTML = "Please enter the data in this format: Firstname Lastname"; 
        return false;
    } else {
        document.getElementById("name").nextSibling.innerHTML = ""; 
        return true;
    }
}

function validateEmail() {
    var emailVal = document.contact.email.value;
    var emailParts = emailVal.split("@");
    var emailParts2 = emailVal.split(".");
    var length = emailParts.length;
    var length2 = emailParts2.length;
    if (length < 2) {
        document.getElementById("email").nextSibling.innerHTML = "Please enter a valid email"; 
        return false;
    }else if (length2 < 2) {
        document.getElementById("email").nextSibling.innerHTML = "Please enter a valid email"; 
        return false;
    }else {
        document.getElementById("email").nextSibling.innerHTML = ""; 
        return true;
    }
}

function sendData() {
    var name = document.contact.name.value;
    var email = document.contact.email.value;
    var mes = document.contact.message.value;
    var nameParts = name.split(" ");
    var emailParts = email.split("@");
    var emailParts2 = email.split(".");
    if (nameParts < 2 || emailParts < 2 || emailParts2 < 2 || mes < 1) {
        document.getElementById("message").nextSibling.innerHTML = "There are errors in your input";
    }else {
        var url = "mailto:" + email + "Message from" + name + "&body=" + mes;
        window.location.href = url; 
    }



    



}



