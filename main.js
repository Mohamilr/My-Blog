






//HOME DOM
//li
const displayName = document.getElementById("user");
//ul
const show = document.querySelector(".sublink");
displayName.appendChild(document.createTextNode("man"));
displayName.className = ("active");
show.appendChild(displayName);
// show.insertAdjacentText("beforebegin", displayName);

