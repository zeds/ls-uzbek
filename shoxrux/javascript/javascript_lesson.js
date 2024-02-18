// 1 get button element
const button = document.querySelector("button");
// 2 add eventListener to the button
button.addEventListener("click", updateName);
// 3 create updateName Function

function updateName() {
    const name = prompt("名前を入力して下さい");
    button.textContent = `学生の 名前は: ${name}`;
}
// function updateName() {
//     const name = prompt("名前を入力して下さい");
//     button.textContent = `Player 1: ${name}`;
// }