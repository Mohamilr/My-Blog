//declarations
// const date = document.querySelector('input[type = "date"]');
// const title = document.querySelector("#title");
// const discription = document.querySelector("#discription");
// const image = document.querySelector('input[type = "file"]');
//

posts = [
    {
        id : 1,
        title: titl.value,
        date: dat,
        image : "https://image url",
        content : disc
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

//  localStorage.getItem('user');

for(let k = 0; k < posts.length; k++){
    // const jj = document.querySelectorAll(".box");
    const jj = document.querySelector(".box")
    const gg = document.createElement("div"); 
    
   
    // const ff = document.querySelector(".blog-news");
//     jj.appendChild(gg);
//    gg.innerHTML = `<h4>${localStorage.getItem("date")}</h4>
//     spanElem ${posts[k].content}
//     <div>${localStorage .getItem("discription")}</div>
//     <h4>${posts[k].date}</h4>`
    // <img src="${localStorage.getItem("discription")}/>
}

// content.forEach(poo => {
//     return poo.title += 1

// });

// function getPosts() {
//     for{}
// }
