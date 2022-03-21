function checkCreds() {
    //check all the variables and initialize
    var firstName = document.getElementById("fName").value;
    console.log("First Name is " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name is " + lastName);
    var badgeID = document.getElementById("badgeID").value;
    console.log("Badge ID is " + badgeID);

    var fullName = firstName + " " + lastName;
    console.log("Full Name is " + fullName);

    var fullNameLength = fullName.length;
    console.log(fullNameLength);

    if(fullNameLength >= 21 || fullNameLength < 3) {
        document.getElementById("loginStatus").innerHTML = "that name isnt right, man"
    } else if(badgeID > 999 || badgeID <= 0) {
        document.getElementById("loginStatus").innerHTML = "thats not a proper badge ID"
    } else {
        alert("yea thats all fine, come on in " + fullName);
        location.replace("UATSpacePage.html");
    }
}