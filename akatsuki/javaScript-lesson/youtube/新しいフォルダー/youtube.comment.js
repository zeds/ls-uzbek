const parent_recommend = document.querySelector(".recommend_container");
parent_recommend.style.width = "377px";
parent_recommend.style.padding = "4px";
// parent_recommend.style.background = "blue";
const heading = document.createElement("h2");
heading.display = "flex";
heading.innerHTML = "Videos";
heading.style.margin = 0;
let editing = false;
parent_recommend.appendChild(heading);

const recommendData = [
  {
    img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
    title: "ロシアから日本を選んで住んだ理由。",
    user: "🌹ディアナちゃんねる🌹",
    statistics: "57,007 回視聴  2024/03/15",
  },
  {
    img: "https://i.ytimg.com/vi/JM75dAskORs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTNuT62ywWpzAiB8-XMZJXdr6iEg",
    title:
      "【ドーパミン中毒】スタンフォード大学医学部「冷たいシャワーの効果とは」／朝一番のエクササイズが効果的な理由／苦痛と快楽の感情はシーソーのように行き来する【PIVOT GLOBAL】",
    user: "PIVOT 公式チャンネル",
    statistics: "チャンネル登録者数 144万人",
  },
  {
    img: "https://i.ytimg.com/vi/TO2t9esOUZA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbmuO4gXa25PqUBzpwJhqHfOwsbw",
    title: "ИСТОРИИ СПАСАТЕЛЯ! Страшные истории на ночь.Страшилки на ночь.",
    user: "DARK~PHIL",
    statistics: "65万回視聴",
  },
  {
    img: "https://i.ytimg.com/vi/BH4ukdHaLmg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7AOL5WAISU0HpHDVqNF_ySb2yOw",
    title: "КВАРТИРА КОШМАРОВ! Страшные истории на ночь.Страшилки на ночь.",
    user: "DARK~PHIL",
    statistics: "21万回視聴",
  },

  {
    img: "https://i.ytimg.com/vi/BFS9n4B_2xA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0XuNyVjX1z1FRManXoNmQKxlBSg",
    title: "Bali in 8k ULTRA HD HDR - Paradise of Asia (60 FPS)",
    user: "8K WORLD",
    statistics: "3M Subscribers",
  },

  {
    img: "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyLpS3boh1ChcvVbXOTWBR6sWt5w",
    title: "Bulgaria 8K HDR 60P (FUHD) Very beautiful place",
    user: "Jacob + Keitz Shwartz",
    statistics: "900K Subscribers",
  },

  {
    img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFEoPjAP&rs=AOn4CLDMnU74TxZBcC5ano3eLkdFn0SEFw",
    title:
      "Morning Piano Music | Piano music to Study, Work, Ambience,... 🎷 | Best Choice for Study, Work #2",
    user: "Aom",
    statistics: "50 thousand Subscribers",
  },
  {
    img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
    title: "BUMP OF CHICKEN「Sleep Walking Orchestra」",
    user: "BUMP OF CHICKEN",
    statistics: "342万回視聴",
  },

  {
    img: "https://i.ytimg.com/vi/1N-I7vNVYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrBrRV3JQn4-8bnLiahdxCGa_I-A",
    title: "Cottagecore Spring Hobbies 🌷🍓🐇 | Making Strawberry Cookies |",
    user: "Our Cottage Life",
    statistics: "46K views  2 weeks ago",
  },

  {
    img: "https://i.ytimg.com/vi/ncUTNE6D39M/hq720.jpg?sqp=- oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOjYm_cjlGPXFQV0BZPYHIMX-4yw ",
    title:
      "FAST X | Won't Back Down (Official Music Video) - NBA YoungBoy, Bailey Zimmerman, Dermot Kennedy",
    user: "YoungBoy Never Broken",
    statistics: "10万回視聴",
  },

  {
    img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
    title: "Sizga yetib bo'lmay qoladi www | Iqtibos podcast #23",
    user: "Aziz Rakhimov",
    statistics: "52K views  2 weeks ago",
  },

  {
    img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
    title:
      "A Mellow Morning In Tokyo - (𝙿𝚕𝚊𝚢𝚕𝚒𝚜𝚝) 𝙻𝚊𝚖𝚙, 𝙸𝚌𝚑𝚒𝚔𝚘 𝙰𝚘𝚋𝚊, 𝙼𝚊𝚖𝚎𝚛𝚒𝚌𝚘,フレネシ",
    user: "Hangout Session",
    statistics: "7万回視聴",
  },

  {
    img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg",
    title: "temani qattimi",
    user: "mexroj",
    statistics: "1M views",
  },
];

for (let i = 0; i < recommendData.length; i++) {
  const recommend = document.createElement("div");
  recommend.style.width = "377px";
  recommend.style.height = "94px";
  // recommend.style.background = "red";
  recommend.style.borderRadius = "8px";
  recommend.style.cursor = "pointer";
  recommend.style.overflow = "hidden";
  // recommend.style.border = "1px solid #00000033";
  recommend.style.marginBottom = "10px";
  recommend.style.display = "flex";
  recommend.style.fontSize = "12px";

  const img = document.createElement("img");
  img.style.borderRadius = "8px";
  img.src = recommendData[i].img;
  img.style.height = "100%";
  img.style.width = "168px";

  const description = document.createElement("div");
  // description.style.background = "pink";
  description.style.padding = "4px";

  const title = document.createElement("div");
  title.innerHTML = recommendData[i].title;
  title.className = "recommend_title";
  title.style.fontWeight = 700;
  const user = document.createElement("div");
  user.innerHTML = recommendData[i].user;
  user.style.marginTop = "8px";
  user.style.color = "#969696";
  const statistics = document.createElement("div");
  statistics.style.color = "#969696";

  statistics.innerHTML = recommendData[i].statistics;

  description.appendChild(title);
  description.appendChild(user);
  description.appendChild(statistics);

  recommend.appendChild(img);
  recommend.appendChild(description);

  parent_recommend.appendChild(recommend);
}

const commentData = [
  {
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_myvH7b_HnK4bGTriXHPDN8em2LEIWBbek8J0FNKo0rQD8ZCW9JmvaIEjxiNg1o=s88-c-k-c0x00ffffff-no-rj",
    user: "@shuhratsattorov1021",
    title:
      "Aktyor, qo'shiqchi, sportchilarga muxlis fanat bo'linar edi Ilim axliga muxlis fanat bo'lish vaqti yana keldi.",
  },
  // Sarvie
  {
    avatar:
      "https://yt3.ggpht.com/-76XG7nkFvP7s-gIh3DIvqHmpAPzIqzSAz6oEzsY7-Qv_QpJVDVn9_PP3yvTu8I_5ZHZZJfI1A=s88-c-k-c0x00ffffff-no-rj",
    user: "@PhanLynne",
    title:
      "The vocals express emotions so strongly that it makes you feel like you're being engulfed by the waves of emotion in the song. This song feels like it takes you on a journey of the mind. I think it will leave a lasting impression when listening to it. The combination of the delicate expression of the voice and the beauty of the melody is truly touching.",
  },
  //Asila
  {
    avatar:
      "https://yt3.ggpht.com/JMI3XYUuTx44r1J9ve_Gwo9jdhh7z7dTTjg8r3PDGmGxvlGu_Cnxr_lR7_XeiiObo4nd-H-exQ=s88-c-k-c0x00ffffff-no-rj",
    user: "@asilamamanova",
    title:
      "Kutib turgandik🎉.Hammasini eshitib chiqdik, bir boshidan.Juda foydali bo'layapti.O'tgan galki hayotim uchun katta katta anglashlar berdi",
  },
  // shox
  {
    avatar:
      "https://champlaincrossover.org/wp-content/uploads/2022/04/gEeThz9M5G9N72JH2dXadQ-900x450.jpg",
    user: "@YoungBoyNeverBroken",
    title:
      "The Fast and Furious Franchise: Why Is It so Popular? - The Crossover",
  },
  //alsu
  {
    avatar: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg",
    user: "@Hangout Session",
    title: "A Mellow Morning In Tokyo - (𝙿𝚕𝚊𝚢𝚕𝚒𝚜𝚝) ",
  },

  {
    avatar:
      "https://yt3.ggpht.com/JMI3XYUuTx44r1J9ve_Gwo9jdhh7z7dTTjg8r3PDGmGxvlGu_Cnxr_lR7_XeiiObo4nd-H-exQ=s88-c-k-c0x00ffffff-no-rj",
    user: "@Momokso",
    title: "Daydreaming of a Road Trip",
  },
];

const parent_pc_comment = document.querySelector(".pc_comment_container");
const parent_sp_comment = document.querySelector(".sp_comment_container");

console.log("commentData.length=", commentData.length);
function showComments() {
  for (let i = 0; i < commentData.length; i++) {
    const comment_box = document.createElement("div");
    comment_box.style.display = "flex";
    comment_box.style.alignItems = "center";
    comment_box.className = "comment_box";

    const comment_img = document.createElement("img");
    comment_img.src = commentData[i].avatar;
    comment_img.style.width = "40px";
    comment_img.style.height = "40px";
    comment_img.style.marginRight = "10px";
    comment_img.style.borderRadius = "50%";

    // userとタイトルの親
    const comment_desc = document.createElement("div");
    const comment_user = document.createElement("div");
    comment_user.innerHTML = commentData[i].user;
    comment_user.style.fontWeight = "bold";
    comment_user.style.fontSize = "13px";
    const comment_title = document.createElement("div");
    comment_title.innerHTML = commentData[i].title;
    comment_title.style.fontSize = "14px";
    comment_desc.appendChild(comment_user);
    comment_desc.appendChild(comment_title);

    // ボタンの親
    const comment_button = document.createElement("div");
    comment_button.display = "flex";
    const edit_button = document.createElement("button");
    edit_button.innerHTML = "編集";
    edit_button.name = commentData[i].title;
    const delete_button = document.createElement("button");
    delete_button.innerHTML = "削除";

    comment_button.appendChild(edit_button);
    comment_button.appendChild(delete_button);

    edit_button.addEventListener("click", function () {
      if (!editing) {
        // 创建一个新的输入框
        const input = document.createElement("input");
        input.type = "text";
        input.className = "edit-input"; // 给输入框添加一个类名
        input.value = commentData[i].title; // 将当前的标题作为输入框的初始值

        comment_title.innerHTML = ""; // 清空当前标题的HTML
        comment_title.appendChild(input); // 将新的输入框加入DOM中

        edit_button.innerHTML = "保存"; // 更改按钮的文本为“保存”
        editing = true; // 标记为编辑状态
      } else {
        // 如果当前是编辑状态，则保存编辑
        const newTitleInput = document.querySelector(".edit-input"); // 通过类名找到输入框
        if (newTitleInput) {
          const newTitle = newTitleInput.value; // 获取输入框的值，即新标题
          commentData[i].title = newTitle; // 更新数据
          comment_title.innerHTML = newTitle; // 更新页面显示
          edit_button.innerHTML = "編集"; // 更改按钮的文本为“编辑”
          editing = false; // 取消编辑状态标记
        }
      }
    });

    //削除ボタンが押された時

    delete_button.addEventListener("click", function () {
      // alert(`${i}番目が押されました`);
      commentData.splice(i, 1);

      const elemAll = document.querySelectorAll(".comment_box");
      for (let k = 0; k < elemAll.length; k++) {
        elemAll[k].remove();
      }

      showComments();
    });

    comment_box.appendChild(comment_img);
    comment_box.appendChild(comment_desc);
    comment_box.appendChild(comment_button);

    parent_pc_comment.appendChild(comment_box);
    // parent_sp_comment.appendChild(comment_box);
  }
}

// コメント投稿部分を作成
const post_container = document.querySelector(".post_container");
post_container.style.display = "flex";

const img = document.createElement("img");
img.src =
  "https://yt3.ggpht.com/-76XG7nkFvP7s-gIh3DIvqHmpAPzIqzSAz6oEzsY7-Qv_QpJVDVn9_PP3yvTu8I_5ZHZZJfI1A=s88-c-k-c0x00ffffff-no-rj";
// img.src = "./images/tom.jpeg";
img.style.width = "40px";
img.style.height = "40px";
img.style.borderRadius = "50%";

post_container.appendChild(img);

const post_input_container = document.createElement("div");
post_input_container.style.width = "100%";
post_input_container.style.padding = "0 10px 5px 10px";

const post_input = document.createElement("input");
post_input.id = "comment";
post_input.placeholder = "コメントする";

post_input.style.width = "100%";
post_input_container.appendChild(post_input);
post_container.appendChild(post_input_container);

const post_cancel_button = document.createElement("button");
post_cancel_button.innerHTML = "キャンセル";
const post_comment_button = document.createElement("button");
post_comment_button.innerHTML = "コメント";

post_input_container.appendChild(post_cancel_button);
post_input_container.appendChild(post_comment_button);

post_cancel_button.addEventListener("click", function () {
  post_input.value = "";
});
post_comment_button.addEventListener("click", function () {
  if (editing === false) {
    let comment = document.getElementById("comment").value;
    let obj = {
      avatar: "./image/channels4.jpg",
      user: "@YA is me",
      title: comment,
    };

    commentData.unshift(obj);
    const elemAll = document.querySelectorAll(".comment_box");
    for (let k = 0; k < elemAll.length; k++) {
      elemAll[k].remove();
    }
    showComments();
  }

  // alert(comment)
  // let parent = document.getElementById("lists");
  // let name = document.getElementById("name").value;
  // let obj = { id: "111", name: name, comment };
  // comments.unshift(obj);

  // // 今表示されているコメントを全て消す
  // clearElements();

  // // commentsを表示
  // showComments();
});

showComments();
