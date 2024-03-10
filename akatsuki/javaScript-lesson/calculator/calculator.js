

let select = "x";
let type = "+";
let myTimeout = null;
let x = document.querySelector(".x");
let y = document.querySelector(".y");
let z = document.querySelector(".z");
let answer = document.querySelector(".answer");

let button0 = document.querySelector(".button0");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let button_plus = document.querySelector(".button_plus");
let button_sub = document.querySelector(".button_sub");
let button_eq = document.querySelector(".button_eq");
let button_mul = document.querySelector(".button_mul");
let button_div = document.querySelector(".button_div");
let button_percent = document.querySelector(".button_percent");
let button_plus_minus = document.querySelector(".button_plus_minus");

x.style.background ="red";

x.addEventListener("click",function(){
    x.style.background ="red";
    y.style.background ="transparent";
    select ="x";
})
y.addEventListener("click",function(){
    x.style.background ="transparent";
    y.style.background ="red";
    select ="y";
})

button0.addEventListener("click",function(){
    if(select === "x"){
        if(x.innerHTML !== "x"){
            x.innerHTML = x.innerHTML + "0";
        }
    }else{
        if(y.innerHTML !== "y") {
            y.innerHTML = y.innerHTML + "0";
        }
    }
});

button1.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "1";
        }else{
        x.innerHTML = x.innerHTML + "1";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "1";
    }else{
        y.innerHTML = y.innerHTML + "1";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button2.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "2";
        }else{
        x.innerHTML = x.innerHTML + "2";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "2";
    }else{
        y.innerHTML = y.innerHTML + "2";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button3.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "3";
        }else{
        x.innerHTML = x.innerHTML + "3";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "3";
    }else{
        y.innerHTML = y.innerHTML + "3";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button4.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "4";
        }else{
        x.innerHTML = x.innerHTML + "4";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "4";
    }else{
        y.innerHTML = y.innerHTML + "4";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button5.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "5";
        }else{
        x.innerHTML = x.innerHTML + "5";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "5";
    }else{
        y.innerHTML = y.innerHTML + "5";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button6.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "6";
        }else{
        x.innerHTML = x.innerHTML + "6";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "6";
    }else{
        y.innerHTML = y.innerHTML + "6";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button7.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "7";
        }else{
        x.innerHTML = x.innerHTML + "7";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "7";
    }else{
        y.innerHTML = y.innerHTML + "7";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button8.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "8";
        }else{
        x.innerHTML = x.innerHTML + "8";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "8";
    }else{
        y.innerHTML = y.innerHTML + "8";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});
button9.addEventListener("click",function(){
    if (select === "x") {
        if(x.innerHTML === "x"){
            x.innerHTML = "9";
        }else{
        x.innerHTML = x.innerHTML + "9";
    }
    answer.innerHTML = document.querySelector(".x").innerHTML;
    }else{
    if(y.innerHTML === "y"){
        y.innerHTML = "9";
    }else{
        y.innerHTML = y.innerHTML + "9";
    }
    answer.innerHTML = document.querySelector(".y").innerHTML;
}
});


//=
button_eq.addEventListener("click",function(){
    console.log("=");
    let x =Number(document.querySelector(".x").innerHTML);
    let y =Number(document.querySelector(".y").innerHTML);
    let z = 0;



switch(type){
    case"+":
    z = x + y;
    break;
    case"-":
    z = x - y;
    break;
    case"*":
    z = x * y;
    break;
    case"/":
    z = x / y;
    break;
    case"%":
    z = x % y;
    break;
}

document.querySelector(".answer").innerHTML = z;
document.querySelector(".z").innerHTML = z;
document.querySelector(".x").style.background = "red";
document.querySelector(".y").style.background = "transparent";
select = "x";
document.querySelector(".x").innerHTML = "x";
document.querySelector(".y").innerHTML = "y";

});

//+
button_plus.addEventListener("click" ,function(){
    select = "y";
    type = "+";
    document.querySelector(".type").innerHTML = "+";
    x.style.background = "transparent";
    y.style.background = "red";

    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 100); //20fps
});

//-
button_sub.addEventListener("click" ,function(){
    select = "y";
    type = "-";
    document.querySelector(".type").innerHTML = "-";
    x.style.background = "transparent";
    y.style.background = "red";

    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 100); //20fps
});

//*
button_mul.addEventListener("click",function(){
    select = "y";
    type = "*";
    document.querySelector(".type").innerHTML = "*";
    x.style.background = "transparent";
    y.style.background = "red";

    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 100); //20fps
});

// /
button_div.addEventListener("click",function(){
    select = "y";
    type = "/";
    document.querySelector(".type").innerHTML = "/";
    x.style.background = "transparent";
    y.style.background = "red";

    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); //20fps
});

//%
button_percent.addEventListener("click",function(){
    select = "y";
    type = "%";
    document.querySelector(".type").innerHTML = "%";
    x.style.background = "transparent";
    y.style.background = "red";

    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); //20fps
});

//±
button_plus_minus.addEventListener("click",function(){
    let x = document.querySelector(".x").innerHTML;
    let y = document.querySelector(".y").innerHTML;

    if (select == "x"){
        x = x * -1;
        document.querySelector(".x").innerHTML = x;
    }else{
        y = y * -1;
        document.querySelector(".y").innerHTML = y;
    }
    if (select == "x"){
        x = x * -1;
        document.querySelector(".x").innerHTML = x;
        answer.innerHTML = x;
    }else{
        y = y * -1;
        document.querySelector(".y").innerHTML = y;
        answer.innHTML = y;
    }
    answer.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); //20fps
});

function Allclear(){
    const x =document.querySelector(".x");
    const y =document.querySelector(".y");
    const z =document.querySelector(".z");
    const answer = document.querySelector(".answer");

    x.innerHTML = "x";
    y.innerHTML ="y";
    z.innerHTML ="z";
    answer.innerHTML = "0";

    select = "x";
    x.style.background = "red";
    y.style.background = "transparent";
}

function myTrigger(){
    answer.classList.toggle("hidden");
    clearInterval(myTimeout);
    myTimeout = null;
}