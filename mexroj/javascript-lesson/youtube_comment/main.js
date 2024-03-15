const comments = [
  {
    id: "4f550e71-9705-42bb-85d9-5826e08780f7",
    name: "佐藤",
    comment: "優しい二匹に癒されます",
  },
  {
    id: "0a2c283a-0af7-4089-a9b2-4f2b850b4244",
    name: "高橋",
    comment: "いつも一緒に居る人がそばに居れば安心するんだよねぇ🍀",
  },
  {
    id: "07ae9121-d2c1-4d1d-8034-57a57fc3bbdb",
    name: "山田",
    comment: "そうなのねー😢 家族だね😭",
  },
];

document.getElementById("commentButton").addEventListener("click", function () {
  let parent = document.getElementById("lists");

  let name = getElementById("name").value;
  let comment = getElementById("comment").value;
  let obj = { id: "11111", name: name, comment };
  comments.unshift(obj);

  clearElement();

  showComments();
});

document.getElementById("clearButton").addEventListener("click", function () {
  clearElement();
  comments.splice(0, comments.length);
});

function showComments() {
  let parent = document.getElementById("lists");

  for (let i = 0; i < comments.length; i++) {
    let elem = document.createElement("div");
    elem.className = "elem";
    let comment = document.createElement("div");
    comment.innerHTML = comments[i].name + " " + comments[i].comment;
    elem.appendChild(comment);

    let right = document.createElement("div");

    let editButton = document.createElement("button");
    editButton.innerHTML = "編集";
    editButton.addEventListener("click", function () {});

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "削除";
    deleteButton.addEventListener("click", function () {});

    right.appendChild(editButton);
    right.appendChild(deleteButton);
    elem.appendChild(right);

    parent.appendChild(elem);
  }
}
function clearElement() {
  const all = document.querySelectorAll(".elem");
  for (let i = 0; i < all.length; i++) {
    all[i].remove();
  }
}

// showComments();
