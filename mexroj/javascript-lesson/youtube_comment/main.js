let editMode = false; // 編集ボタンが押された時に、editMode = true

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");
console.log("fruits=", fruits);

const div1 = document.getElementById("div1");

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

// deleteComment("0a2c283a-0af7-4089-a9b2-4f2b850b4244")
function deleteComment(id) {
  for (let i = 0; i < comments.length; i++) {
    if (id === comments[i].id) {
      comments.splice(i, 1);
    }
  }
  console.log("comments=", comments);
  showComments();
}

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

const showComments = () => {
  clearComments();

  for (let i = 0; i < comments.length; i++) {
    const box = document.createElement("div");
    box.className = "box";

    const divComment = document.createElement("div");
    divComment.className = "added_comment";
    divComment.innerHTML = comments[i].name + " " + comments[i].comment;

    //編集ボタン
    const editButton = document.createElement("button");
    editButton.innerHTML = "編集";
    editButton.className = "added_comment";
    editButton.addEventListener("click", function () {
      // alert("名前:" + comments[i].name)
      // alert("コメント:" + comments[i].comment)
      document.getElementById("name").value = comments[i].name;
      document.getElementById("comment").value = comments[i].comment;
    });

    //削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "削除";
    deleteButton.className = "added_comment";
    deleteButton.addEventListener("click", function () {
      deleteComment(comments[i].id);
    });

    // divRightの中に、ボタンを入れる
    const divRight = document.createElement("div");
    divRight.className = "added_comment";
    divRight.appendChild(editButton);
    divRight.appendChild(deleteButton);

    box.appendChild(divComment);
    box.appendChild(divRight);

    div1.appendChild(box);
  }
  console.log(comments);
};

const clearComments = () => {
  const all = document.querySelectorAll(".added_comment");
  for (let i = 0; i < all.length; i++) {
    all[i].remove();
  }
};

//コメントボタンが押された時、addEventListerで書いてください=>リッチさん
const btnComment = document.getElementById("btnComment");

btnComment.addEventListener("click", function () {
  // 宿題
  if (editMode === true) {
    // idから修正する配列をみつける
    // 中身を置き換える
    // 再表示表示

    editMode = false;
  } else {
    const inputName = document.getElementById("name").value;
    const inputComment = document.getElementById("comment").value;
    const commentId = generateUUID();

    const obj = {
      id: commentId,
      name: inputName,
      comment: inputComment,
    };
    comments.unshift(obj);
    showComments();
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("name").focus();
  }
});

showComments();
