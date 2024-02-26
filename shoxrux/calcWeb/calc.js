


let select = "x";
let x = document.querySelector(".x");
let y = document.querySelector(".y");
let z = document.querySelector(".z");


let pad_1 = document.querySelectorAll(".pad")[0];
let pad_2 = document.querySelectorAll(".pad")[1];
let pad_3 = document.querySelectorAll(".pad")[2];
let pad_4 = document.querySelectorAll(".pad")[3];
let pad_5 = document.querySelectorAll(".pad")[4];
let pad_6 = document.querySelectorAll(".pad")[5];
let pad_7 = document.querySelectorAll(".pad")[6];
let pad_8 = document.querySelectorAll(".pad")[7];
let pad_9 = document.querySelectorAll(".pad")[8];
let pad_10 = document.querySelectorAll(".pad")[9];


x.style.background = "red";

x.addEventListener("click", function () {
    x.style.background = "red";
    y.style.background = "transparent";
    select = "x";
})
y.addEventListener("click", function () {
    x.style.background = "transparent";
    y.style.background = "red";
    select = "y";
})

pad_1.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "1";
    }
    else {
        y.innerHTML = "1";
    }
});
pad_2.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "2";
    }
    else {
        y.innerHTML = "2";
    }
});
pad_3.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "3";
    }
    else {
        y.innerHTML = "3";
    }
});
pad_4.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "4";
    }
    else {
        y.innerHTML = "4";
    }
});
pad_5.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "5";
    }
    else {
        y.innerHTML = "5";
    }
});
pad_6.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "6";
    }
    else {
        y.innerHTML = "6";
    }
});
pad_7.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "7";
    }
    else {
        y.innerHTML = "7";
    }
});
pad_8.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "8";
    }
    else {
        y.innerHTML = "8";
    }
});
pad_9.addEventListener("click", function () {
    if (select === "x") {
        x.innerHTML = "9";
    }
    else {
        y.innerHTML = "9";
    }
});

pad_10.addEventListener("click", function () {
    let x = Number(document.querySelector(".x").innerHTML);
    let y = Number(document.querySelector(".y").innerHTML);
    let z = x + y;
    document.querySelector(".z").innerHTML = z.toString();
})