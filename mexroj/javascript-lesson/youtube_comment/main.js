let comments = document.getElementById("comments");
comments.innerHTML = ["mex yaxshi", "tom yomon", "rich nega"];

let nevCom = document.querySelector("input").value;

document.querySelector("button").addEventListener("click", function () {
  comments.push(nevCom);
});
