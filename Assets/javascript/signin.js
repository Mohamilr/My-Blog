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
const profile = [
    {
        name: "mohammed",
        pass: "admin123"
    },
    {
        name : "ibrahim",
        pass : "admin123"
    },
];

//message declaration
const message = document.createElement("div");
main.appendChild(message);
//message style
message.style.textAlign = "center";
message.style.color = "#ffffff";
message.style.padding = "30px";

function signIn(event) {
    event.preventDefault();
    localStorage.setItem("username", userName.value)
    //iterate over profile name and password
    for (let i = 0; i < profile.length; i++) {
        if (userName.value === profile[i].name && password.value === profile[i].pass) {
            window.location.href = "./loged-in/home.html";
        }
        else if (userName.value !== profile[i].name || password.value !== profile[i].pass) {
            message.textContent = "the username and password is wrong".toUpperCase();
            //incorrect style
            message.style.backgroundColor = "red";
        }
    }


    userName.value = "";
    password.value = "";
}

//event listener
submit.addEventListener("click", signIn);