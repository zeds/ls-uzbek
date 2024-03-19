let likeBtn = document.querySelector(".like");
let increment_like = document.querySelector(".lineIncrement");
let like_count = 0;

function updateLike() {
    increment_like.innerHTML = like_count++;

}
likeBtn.addEventListener("click", updateLike);


// let dislike = document.querySelector(".dislike");
// console.log(dislike);

// end like increment=================================

// start input and button section ========================

const enterBtn = document.getElementById("enterBtn");
console.log(enterBtn);

const comments = [{
    id: "1",
    comment: "one piece is best anime in the world",
    icon: "https://yt3.ggpht.com/y4K_VEk3UJCDzpbDZ5wskZkmEVFf6l6IiKNC92SzBkOHxJjabBm3wEjrDgONgSlpjI5OB9lgrA=s48-c-k-c0x00ffffff-no-nd-rj"
}, {
    id: "1",
    comment: "one piece is best anime in the world",
    icon: "https://yt3.ggpht.com/y4K_VEk3UJCDzpbDZ5wskZkmEVFf6l6IiKNC92SzBkOHxJjabBm3wEjrDgONgSlpjI5OB9lgrA=s48-c-k-c0x00ffffff-no-nd-rj"
}, {
    id: "1",
    comment: "one piece is best anime in the world",
    icon: "https://yt3.ggpht.com/y4K_VEk3UJCDzpbDZ5wskZkmEVFf6l6IiKNC92SzBkOHxJjabBm3wEjrDgONgSlpjI5OB9lgrA=s48-c-k-c0x00ffffff-no-nd-rj"
}, ]



enterBtn.addEventListener("click",function(){
    let parent = document.querySelector(".lists");
    let comment = document.getElementById("input-comment").value;
    let obj = {comment:comment,id:"111"};

    comments.unshift(obj);
    showComments();
});
function showComments(){
    let parent = document.querySelector(".lists");

    for(let i = 0;i < comments.length;i++){
        let newComment = document.createElement("div");
        newComment.innerHTML = comments[i].comment;
        parent.appendChild(newComment);
    }
}
