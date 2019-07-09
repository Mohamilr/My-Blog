const bar = document.getElementById("bar");
const ul = document.getElementsByClassName("sublink")[0];
bar.addEventListener("click", () => {
    ul.classList.toggle("toggle");
})