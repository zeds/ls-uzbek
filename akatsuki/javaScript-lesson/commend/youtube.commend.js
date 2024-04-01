//===================================================================================
//　　　　　　　　　　　　　　　ビデオの詳細処理
//===================================================================================

const parent_recommend = document.querySelector(".recommend_container");
parent_recommend.style.width = "377px";
parent_recommend.style.padding = "4px";

//===================================================================================
//　　　　　　　　　　　　　　　おすすめ動画(Recommend)処理
//===================================================================================
let editing = false;
const recommendData = [
  {
    img: "https://i.ytimg.com/vi/VkhEnvIy0yU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYA-RBzoTArAkivS-TfoAl_jo_AQ",
    title: "Mili - YUBIKIRI-GENMAN -special edit-",
    user: "Mili",
    statistics: "68.5M 回視聴  2年前",
  },
  {
    img: "https://i.ytimg.com/vi/EXTLJmYsaUQ/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgUIBMofzAP&rs=AOn4CLAwxSpzfRCLhpGq-k4hLw12D2PKiw",
    title: "A whole new world (English)",
    user: "chojang",
    statistics: "16.97M 回視聴  8年前",
  },
  {
    img: "https://i.ytimg.com/vi/TVcLIfSC4OE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMej9mG-6ksgyyPFcRshxs2CG3-A",
    title: "Mulan | I'll Make A Man Out Of You | Disney Sing-Along",
    user: "Disney",
    statistics: "1700M 回視聴  7年前",
  },
  {
    img: "https://i.ytimg.com/vi/2XsgcE6G7FE/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AOAAtAFigIMCAAQARhlIFkoVDAP&rs=AOn4CLBr1iec1QY5h4_eWJJS-O34jgw5uw",
    title:
      "天までとどけ 武田鉄矢 【ドラえもん のび太とアニマル惑星 主題歌】【ドラえもん50周年】",
    user: "トラちゃん",
    statistics: "2.9M万回視聴 4年前",
  },

  {
    img: "https://i.ytimg.com/vi/j9rax18IghI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbo9Lv1amlpUR48za5hwOdftWZng",
    title: "Don't you see! （What a beautiful memory 2009）",
    user: "Zardofficial",
    statistics: "17.04M回視聴  15年前",
  },

  {
    img: "https://i.ytimg.com/vi/aU9v6J_Kcuw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1j_4B-QW_iI3c8lYlbILeUwPOlw",
    title: "アンジェラ・アキ - 手紙 ~拝啓 十五の君へ~ / THE FIRST TAKE",
    user: "THE FIRST TAKE",
    statistics: "4M回視聴 1ヶ月前",
  },

  {
    img: "https://i.ytimg.com/vi/S7zdxJm70gI/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gGAAugCigIMCAAQARh_ICsoJDAP&rs=AOn4CLDi69CvFJ3yXf_2-iwKgkWps8F4LQ",
    title:
      "何かいい事きっとある 島崎和歌子 【ドラえもん のび太とブリキの迷宮 主題歌】【ドラえもん50周年】",
    user: "トラちゃん",
    statistics: "3.5M回視聴 4年前",
  },
  {
    img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
    title: "BUMP OF CHICKEN「Sleep Walking Orchestra」",
    user: "BUMP OF CHICKEN",
    statistics: "3.2M回視聴 3ヶ月前",
  },
  {
    img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
    title: "ドラゴンボールGT OP DAN DAN 心魅かれてく",
    user: "DEEN",
    statistics: "23.2万回視聴 2週前",
  },
];

const rec_parent = document.querySelector(".recommend_container");
rec_parent.style.width = "377px";
//rec_parent.style.padding = "4px";

for (let i = 0; i < recommendData.length; i++) {
  //1.範囲を制作
  const recommend = document.createElement("div");
  recommend.style.width = "377px";
  recommend.style.height = "94px";
  recommend.style.borderRadius = "8px";
  recommend.style.cursor = "pointer";
  recommend.style.overflow = "hidden";
  recommend.style.marginBottom = "10px";
  recommend.style.display = "flex";
  recommend.style.fontSize = "12px";

  //2.おすすめの動画の表示する画像要素を作成する
  const img = document.createElement("img");
  img.style.borderRadius = "8px";
  img.src = recommendData[i].img; //從recommendData配列中設置圖像的來源URL
  img.style.height = "100%";
  img.style.width = "168px";

  //3.<div>を制作する、中にはビデオタイトル、ユーザー名と再生回数
  const description = document.createElement("div");
  description.style.padding = "4px";

  //3.1<div>を制作する、ビデオタイトルの要素を設定する
  const title = document.createElement("div");
  title.innerHTML = recommendData[i].title;
  title.className = "recommend_title";
  title.style.fontWeight = 700;

  //3.2<div>を制作する、ユーザー名の要素を設定する
  const user = document.createElement("div");
  user.innerHTML = recommendData[i].user;
  user.style.marginTop = "8px";
  user.style.color = "#969696";

  //3.3<div>を制作する、再生回数の要素を設定する
  const statistics = document.createElement("div");
  statistics.innerHTML = recommendData[i].statistics;
  statistics.style.color = "#969696";

  //実装
  description.appendChild(title);
  description.appendChild(user);
  description.appendChild(statistics);

  recommend.appendChild(img);
  recommend.appendChild(description);

  rec_parent.appendChild(recommend);
}
//===================================================================================
//　　　　　　　　　　　　　　　ユーザー(自分)コメント(commend)処理
//===================================================================================

const My_commend = document.querySelector(".elem");
My_commend.style.display = "flex";

//1.自分のユーザーアイコンを設定する
const My_img = document.createElement("img");
My_img.src = "Iamge/icon_user_1.png";
//My_img.style.padding = "5px";
My_img.style.width = "40px";
My_img.style.height = "40px";
My_img.style.borderRadius = "50%";
My_commend.appendChild(My_img);

//2.入力コメントを設定
const input_commend_container = document.createElement("div");
input_commend_container.style.width = "100%";
input_commend_container.style.padding = "0px 10px 15px 10px";
//2.1入力inputを要素を設定
const post_input = document.createElement("input");
post_input.id = "comment";
post_input.placeholder = "コメントする";
post_input.style.width = "100%";
post_input.style.border = "none";
post_input.style.borderBottom = "1px solid black";
//2.2 実装
input_commend_container.appendChild(post_input);
My_commend.appendChild(input_commend_container);

//2.3 コメントと削除ボタンを設定
const My_commend_button = document.createElement("button");
const My_delete_button = document.createElement("button");
My_commend_button.innerHTML = "コメント";
My_delete_button.innerHTML = "削除";
//2.4 実装
input_commend_container.appendChild(My_commend_button);
input_commend_container.appendChild(My_delete_button);

//3.削除ボタンの機能を実装
My_delete_button.addEventListener("click", function () {
  post_input.value = "";
});

//4.コメント機能を実装
My_commend_button.addEventListener("click", function () {
  if (editing === false) {
    let my_new_commend = document.getElementById("comment").value; //inputのid 入力中の値を取得
    let my_new_obj = {
      avatar: "Iamge/icon_user_1.png",
      user: "Yes!Is me!!",
      commend: my_new_commend,
    };

    viewer_commendArray.unshift(my_new_obj); //一番上に配列に入れる
    console.log(viewer_commendArray);
    const elemAll = document.querySelectorAll(".viewer_box");
    for (let k = 0; k < elemAll.length; k++) {
      elemAll[k].remove();
    }
    showComment();
  }
});
//===================================================================================
//　　　　　　　　　　　　　　　ユーザー(他人)コメント(commend)処理
//===================================================================================

const viewer_commendArray = [
  {
    avatar:
      "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG6CX7bFaQ6O-4GUHsIE4EGxkHsOAPeTbgJ9dtUeicEsE2ctZexgaPG0eqhRxOdW378vac3EkDLspah3qWWd6fK3rik0kZTCjBP9DrD7vbrp_o8LKF6AjTRFPEJVogbdhDv4mxuUZYmlqg83lCUvBzGt3ZThxQVSSX3ufNQ7XrTK6P9BRdGb6MY4vF0HYTZemqknKoU-KRxRZRggDXzEAS634KKY9eDebhvqXbGXNDRz2xZc5E_25VpCX5Vil_X7maHJxqAG5uVAiaZ62BTxDvSQ=/22026fd9bedadf32bdba4d7f076d216e.jpg",
    user: "@example",
    commend: "This is a commend",
  },
  {
    avatar:
      "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG9QVb_Q5YMZ_9XGvjBEcHiUkEA_SmwzZNbdbJAFAPE_c4eeSAZX__SDk8KgBX7v5hGzyWG3itr2rne4afXtTPZKkHq-fnI1ENLCwa4Od_wnrBryEi2Y2WoKghU74fKWSi_b_Kl_GpVCZs9SZT5e22hNCZEdwTcaj20TdEKEbrXbmgT0zkufcAqHODNuOT8b_Dq7b0BnTdLCbzPjAtE2nF7gNmHJv2cf0zgWS172JaTmFfq3ZkviQ5He3fo6cz_NzXfKZmMPIvT4OR-Pi3bgbCJ3DRwENeP45I1Ha9pwwr154bxgkguG9k_WTtnIyJA5vNr4GWyJB7gpnjzZWBxMH1ln1gM4HpzZr4eq_7h8pzvWy/fitcoverw460h460",
    user: "@example.02",
    commend: "This is a two commend",
  },
  {
    avatar:
      "https://msp.c.yimg.jp/images/v2/tpvPBYOX1wpNVI1UoNSgEpCpxNISoZ4oYbTXnXwZcOHLiJlOV258tTKjNtwKxI1RMA8TokDCFpKC0v8IBK4xGr8S-WSgK9dReo-op8j6eiwggfheT3VZvQQXUlSp7XonFW8qCg9JccEDAkW7qgTayoAgOERmond4rce8jpRphSmrlg_CZut-1eRwx49pFTf5vqbhAqa8imSD_murkIPOn8Iu2oOymvcWPX_mTT2b_eGZtZcDEnuTuSOLRFqdcVLb-_9b8IbMCT1QaxRgvlb3JA==/tanaka003.png",
    user: "@example.03",
    commend: "This is a three commend",
  },
];

const viewer_comment_container = document.querySelector(
  ".viewer_comment_container"
);
console.log(viewer_commendArray);
//視聴者に関するデータを出力
function showComment() {
  for (let i = 0; i < viewer_commendArray.length; i++) {
    //1.範囲を確保、ユーザーのアイコン、ユーザー名とコメント
    const viewer_box = document.createElement("div");
    viewer_box.style.display = "flex";
    viewer_box.style.alignItems = "center";
    viewer_box.classList = "viewer_box";

    //2.ユーザーのアイコンを設定
    const viewer_img = document.createElement("img");
    viewer_img.src = viewer_commendArray[i].avatar;
    viewer_img.style.width = "40px";
    viewer_img.style.height = "40px";
    viewer_img.style.marginRight = "5px";
    viewer_img.style.borderRadius = "50%";

    const viewer_name_commend_box = document.createElement("div");

    //3.ユーザー名を設定
    const viewer_name = document.createElement("div");
    viewer_name.innerHTML = viewer_commendArray[i].user;
    viewer_name.style.fontSize = "13px";
    viewer_name.style.fontWeight = "bold";

    //4.ユーザー（他人）のコメント
    const viewer_commend = document.createElement("div");
    viewer_commend.innerHTML = viewer_commendArray[i].commend;
    viewer_commend.style.fontSize = "14px";

    //5.実装
    viewer_name_commend_box.appendChild(viewer_name);
    viewer_name_commend_box.appendChild(viewer_commend);
    viewer_box.appendChild(viewer_img);
    viewer_box.appendChild(viewer_name_commend_box);
    viewer_comment_container.appendChild(viewer_box);

    //6.編集と削除ボタンを設定する
    const viewer_button_div = document.createElement("div"); //divを確保
    viewer_button_div.style.display = "flex";
    const viewer_edit_button = document.createElement("button");
    viewer_edit_button.innerHTML = "編集";
    const viewer_delete_button = document.createElement("button");
    viewer_delete_button.innerHTML = "削除";
    //7.編集ボタンと削除ボタンを実装
    viewer_button_div.appendChild(viewer_edit_button);
    viewer_button_div.appendChild(viewer_delete_button);
    viewer_box.appendChild(viewer_button_div);


    //編集ボタンの機能実装
    viewer_edit_button.addEventListener("click", function () {
      if (!editing) {
        //編集ではないの場合、以下のコードを実行
        editing = true;
        const viewer_edit_new_commend = document.createElement("input");
        viewer_edit_new_commend.type = "text";
        viewer_edit_new_commend.style.width = "560px";
        viewer_edit_new_commend.classList = "Edit_commend";
        viewer_edit_new_commend.style.border = "none";
        viewer_edit_new_commend.style.borderBottom = "1px solid black";
        viewer_edit_new_commend.value = viewer_commendArray[i].commend; //既存のコメントが新しいのinputの初期の値になる

        viewer_commend.innerHTML = ""; //現在表示しているのコメントを削除
        viewer_commend.appendChild(viewer_edit_new_commend); //新しいのコメントを入り替え

        viewer_edit_button.innerHTML = "保存"; //編集から保存に変更

        //編集モードだったら
      } else {
        const new_commend_input = document.querySelector(".Edit_commend"); //新しいのコメントをクラスを捕まる
        if (new_commend_input) {
          const new_input = new_commend_input.value; //新しいの入力を取得
          viewer_commendArray[i].commend = new_input; //新しいの入力の値を既存のコメントに入り替え
          viewer_commend.innerHTML = new_input; //新しいの入力の値を表示する
          viewer_edit_button.innerHTML = "編集"; //編集に変更する
          console.log(viewer_commendArray);
          editing = false;
        }
      }
    });

    //8.削除ボタンの機能実装
    viewer_delete_button.addEventListener("click", function () {
      viewer_commendArray.splice(i, 1); //i 番目のcommend　一つだけ削除
      console.log(viewer_commendArray);
      const viewer_All_commend = document.querySelectorAll(".viewer_box");
      for (let j = 0; j < viewer_All_commend.length; j++) {
        viewer_All_commend[j].remove();
      }
      showComment();
    });
  }
}
showComment();

/*const Video_container = document.querySelector(".info");

Video_container.style.width = "100%";
Video_container.style.height = "120px";
Video_container.style.backgroundColor = "red";
Video_container.style.marginBottom = "30px";

let video_title = document.getElementById("video_title");
video_title.style.fontSize = "24px";
video_title.style.fontWeight = "bold";

video_title.innerHTML =
  "何かいい事きっとある 島崎和歌子 【ドラえもん のび太とブリキの迷宮 主題歌】【ドラえもん50周年】";

let channel_container = document.getElementById("channel");
channel_container.style.display = "flex";
channel_container.style.backgroundColor = "blue";
channel_container.style.width = "100%";
channel_container.style.height = "50px";

// 创建左侧 div 并设置样式
let leftDiv = document.createElement("div");
const usericon = document.createElement("img");
usericon.style.width = "40px";
usericon.style.height = "40px";
usericon.src = "user_1.png";
leftDiv.style.flex = "1"; //親の半分
leftDiv.style.backgroundColor = "lightblue"; // 设置背景色以便于区分


// 创建右侧 div 并设置样式
let rightDiv = document.createElement("div");
rightDiv.style.flex = "1"; //親の半分
rightDiv.innerHTML = "右";
rightDiv.style.backgroundColor = "lightgreen"; // 设置背景色以便于区分

leftDiv.appendChild(usericon);
channel_container.appendChild(leftDiv);
channel_container.appendChild(rightDiv);
Video_container.appendChild(channel_container);
*/
