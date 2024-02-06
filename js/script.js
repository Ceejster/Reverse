//get string from page
//controller function
function getValue() {
    document.getElementById("reverseAlert").classList.add("invisible");
    
    let string = document.getElementById("regString").value;
    let rev = reverse(string);
    
    displayReverse(rev);
}

//reverse the string
//logic function
function reverse(userString) {
    let revString = [];

    //reverse string with for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}

//display message
//view function
function displayReverse(revString) {
    //write message to HTML and turn on alert
    document.getElementById("reverseMessage").innerHTML = `${revString}`;
    document.getElementById("reverseAlert").classList.remove("invisible");
}