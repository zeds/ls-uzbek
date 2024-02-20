// 1 get button element
// const button = document.querySelector("button");
// 2 add eventListener to the button
// button.addEventListener("click", updateName);
// 3 create updateName Function

// function updateName() {
//     let name = prompt("名前を入力して下さい");
//     button.textContent = `学生の 名前は: ${name}`;
// }
// function updateName() {
//     const name = prompt("名前を入力して下さい");
//     button.textContent = `Player 1: ${name}`;
// }


const button = document.getElementById("button-id");



button.addEventListener("click", updateSudentName);

function updateSudentName() {

    var studentName = prompt("学生の名前を入力して下さい");

    button.style.color = 'red';
    button.textContent = `学生の 名前は: ${studentName}`;
}

button2.addEventListener("click", studentOld);
