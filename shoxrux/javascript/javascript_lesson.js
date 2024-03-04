
const color_btn = document.querySelector("#changecolorBtn");
const color = document.querySelector("#color");

color_btn.onclick = () => {
    console.log(color.innerHTML);
    if (color.innerHTML === "green") {
        color.innerHTML = "red";
        color.style.background = "red";
        color.style.color = "white";
    } else {
        color.innerHTML = "green";
        color.style.background = "green";
        color.style.color = "white";
    }
}


// =============================



const button = document.getElementById("button-id");

button.addEventListener("click", updateSudentName);

function updateSudentName() {

    var studentName = prompt("学生の名前を入力して下さい");

    button.style.color = 'red';
    button.textContent = `学生の 名前は: ${studentName}`;
}






