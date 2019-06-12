//declarations
const date = document.querySelector('input[type = "date"]');
const title = document.querySelector("#title");
const discription = document.querySelector("#discription");
const image = document.querySelector('input[type = "file"]');
//
posts = [
    {
        id : 1,
        title: "the book",
        date: "02/12/19",
        image : "https://image url",
        content : "lorem ipsum ..."
    },
    {
        id : 2,
        title: "cook beans",
        date: "1/02/19",
        image : "https://image url",
        content : "lorem ipsum ..."
    },
    {
        id : 3,
        title: "read books",
        date: "3/12/19",
        image : "https://image url",
        content : "lorem ipsum ..."
    },
];



const content =[
{
    id : 4,
    title: "read books",
    date: "3/12/19",
    image : "https://image url",
    content : "lorem ipsum ..."
},
    {
        id : 5,
        title: "read books",
        date: "3/12/19",
        image : "https://image url",
        content : "lorem ipsum ..."
}
];
for (let i = 0; i < content.length; i++) {
    posts.push(content[i]);
}
console.log(posts)


// const jj = document.querySelector(".box");
// const gg = document.createElement("div"); 
// const ff = document.querySelector(".blog-news");



for(let k = 0; k < posts.length; k++){
    const jj = document.querySelector(".box");
    const gg = document.createElement("div"); 
    const ff = document.querySelector(".blog-news");
    // jj.className(".blog-news");
    const spanElem = document.createElement('h4');
    // spanElem.textContent = 'X';
    spanElem.classList.add('.cont');
    // spanElem.onclick = deleteItem;
    jj.appendChild(gg);
    ff.innerHTML = `<h4>${posts[k].title}</h4>
    spanElem ${posts[k].content}
    <div><img src="${posts[k].image}</div>
    <h4>${posts[k].date}</h4>`
}

// content.forEach(poo => {
//     return poo.title += 1

// });

// function getPosts() {
//     for{}
// }



const jj = document.querySelector(".box");

const del = document.querySelector(".remove");

const deleteItem = (event) => {
    event.target.parentElement.style.display = 'none';
}

function a(e){
    e.preventDefault;
    del.forEach(item => {
        item.addEventListener('click', deleteItem)
}
    )
}
// document.querySelectorAll('.delete').forEach(item => {
//     item.addEventListener('click', deleteItem)
// });