//SIGN IN DOM
//declarations
// section
const main = document.querySelector(".form-container");
//username input
const userName = document.getElementById("username");
//password input
const password = document.getElementById("password");
//submit button
const submit = document.getElementById("submit");

//name and password
const profile = {
    name : "mohammed",
    pass : "admin123"
};

//message declaration
const message = document.createElement("div"); 
main.appendChild(message);
//message style
message.style.textAlign = "center";
message.style.color = "#ffffff";
message.style.padding = "30px";

function signIn(){
    // event.preventDefault();
    
    if(userName.value === profile.name && password.value === profile.pass){
        window.location.href = './loged-in/home.html';
    }
    else if(userName.value !== profile.name || password.value !== profile.pass){
        message.textContent = "the username and password is wrong".toUpperCase();
        //incorrect style
        message.style.backgroundColor = "red";
    }

    userName.value = "";
    password.value = "";
}
//event listener
submit.addEventListener("click", signIn);



//HOME DOM
//li
const displayName = document.getElementById("user");
//ul
const show = document.querySelector(".sublink");
displayName.appendChild(document.createTextNode(userName.value));
displayName.className = ("active");
show.appendChild(displayName);
// show.insertAdjacentText("beforebegin", displayName);

