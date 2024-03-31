let editMode = false;
let indexComment = 0;

const comments = [
  {
    id: "4f550e71-9705-42bb-85d9-5826e08780f7",
    name: "佐藤",
    age: 20,
    comment: "優しい二匹に癒されます",
    cntHeart: 0,
    img_url:
      "https://yt3.ggpht.com/C_WH4A2Q4p_w63JmEHKK8-jeWjM3HBwTMRIUsSD1IJMKvo0a9YbrN2h4iOukOECzJ8Duqkun=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "0a2c283a-0af7-4089-a9b2-4f2b850b4244",
    name: "高橋",
    age: 39,
    comment: "いつも一緒に居る人がそばに居れば安心するんだよねぇ🍀",
    cntHeart: 0,
    img_url:
      "https://yt3.ggpht.com/C_WH4A2Q4p_w63JmEHKK8-jeWjM3HBwTMRIUsSD1IJMKvo0a9YbrN2h4iOukOECzJ8Duqkun=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "07ae9121-d2c1-4d1d-8034-57a57fc3bbdb",
    name: "山田",
    age: 48,
    comment: "そうなのねー😢 家族だね😭",
    cntHeart: 0,
    img_url:
      "https://yt3.ggpht.com/C_WH4A2Q4p_w63JmEHKK8-jeWjM3HBwTMRIUsSD1IJMKvo0a9YbrN2h4iOukOECzJ8Duqkun=s68-c-k-c0x00ffffff-no-rj",
  },
];

// コメントボタン
document.getElementById("commentButton").addEventListener("click", function () {
  let parent = document.getElementById("lists");
  // inputの値を取得
  // オブジェクトを作成 { name: xxxx, comment: xxx}
  // commentsにオブジェクトを追加
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  let obj = { id: "111", name: name, comment: comment, age: 18, image_url: "" };

  if (editMode) {
    comments[indexComment].name = name;
    comments[indexComment].comment = comment;
    editMode = false;
    document.getElementById("commentButton").innerHTML = "コメント";
  } else {
    comments.unshift(obj);
  }

  // 今表示されているコメントを全て消す
  clearElements();

  // commentsを表示
  showComments();
});

//clearButton

document.getElementById("clearButton").addEventListener("click", function () {
  clearElements();
  comments.splice(0, comments.length);
});

// commentsを表示したい
function showComments() {
  let parent = document.getElementById("lists");

  for (let i = 0; i < comments.length; i++) {
    let elem = document.createElement("div");
    elem.className = "elem";

    let left = document.createElement("div");
    left.className = "left";

    let img = document.createElement("img");
    img.src = comments[i].img_url;
    left.appendChild(img);

    let comment = document.createElement("div");
    comment.innerHTML =
      comments[i].name + comments[i].age + " 歳" + " " + comments[i].comment;
    left.appendChild(comment);

    let right = document.createElement("div");

    //heartButton
    let heartButton = document.createElement("button");
    if (comments[i].cntHeart !== 0) {
      heartButton.innerHTML = "❤️" + comments[i].cntHeart;
    } else {
      heartButton.innerHTML = "♡";
    }
    heartButton.addEventListener("click", function () {
      comments[i].cntHeart++;
      clearElements();
      showComments();
    });

    // 編集ボタン
    let editButton = document.createElement("button");
    editButton.innerHTML = "編集";

    editButton.addEventListener("click", function () {
      editMode = true;
      indexComment = i;
      document.getElementById("name").value = comments[i].name;
      document.getElementById("comment").value = comments[i].comment;
      document.getElementById("commentButton").innerHTML = "編集完了";
      // comments[i].name = "鈴木";
      // clearElements();
      // showComments();
    });

    //削除ボタン
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "削除";

    deleteButton.addEventListener("click", function () {
      comments.splice(i, 1);
      clearElements();
      showComments();
    });

    elem.appendChild(left);
    right.appendChild(heartButton);
    right.appendChild(editButton);
    right.appendChild(deleteButton);
    elem.appendChild(right);

    parent.appendChild(elem);
  }
}

function clearElements() {
  const all = document.querySelectorAll(".elem");

  for (let i = 0; i < all.length; i++) {
    all[i].remove();
  }
}

// commentsを表示
showComments();
