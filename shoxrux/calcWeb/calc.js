let select = "x";
let type = "+"; // + - * /
let x = document.querySelector(".x");
let y = document.querySelector(".y");
let z = document.querySelector(".z");

let btn_0 = document.querySelector(".btn_0");
let btn_1 = document.querySelector(".btn_1");
let btn_2 = document.querySelector(".btn_2");
let btn_3 = document.querySelector(".btn_3");
let btn_4 = document.querySelector(".btn_4");
let btn_5 = document.querySelector(".btn_5");
let btn_6 = document.querySelector(".btn_6");
let btn_7 = document.querySelector(".btn_7");
let btn_8 = document.querySelector(".btn_8");
let btn_9 = document.querySelector(".btn_9");
let btn_plus = document.querySelector(".btn_plus");
let btn_minus = document.querySelector(".btn_minus");
let btn_multi = document.querySelector(".btn_multi");
let btn_div = document.querySelector(".btn_div");
let btn_eq = document.querySelector(".btn_eq");
let btn_clear = document.querySelector(".btn_clear");
let btn_percent = document.querySelector(".btn_percent");
let btn_plus_minus = document.querySelector(".btn_plus_minus");
let ans = document.querySelector(".ans");
x.style.background = "#A8AAFF";

x.addEventListener("click", function () {
    x.style.background = "#A8AAFF";
    y.style.background = "transparent";
    select = "x";
});
y.addEventListener("click", function () {
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
});

btn_0.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML !== "x") {
            x.innerHTML = x.innerHTML + "0";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML !== "y") {
            y.innerHTML = y.innerHTML + "0";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_1.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "1";
        } else {
            x.innerHTML = x.innerHTML + "1";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "1";
        } else {
            y.innerHTML = y.innerHTML + "1";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_2.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "2";
        } else {
            x.innerHTML = x.innerHTML + "2";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "2";
        } else {
            y.innerHTML = y.innerHTML + "2";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_3.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "3";
        } else {
            x.innerHTML = x.innerHTML + "3";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "3";
        } else {
            y.innerHTML = y.innerHTML + "3";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_4.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "4";
        } else {
            x.innerHTML = x.innerHTML + "4";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "4";
        } else {
            y.innerHTML = y.innerHTML + "4";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_5.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "5";
        } else {
            x.innerHTML = x.innerHTML + "5";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "5";
        } else {
            y.innerHTML = y.innerHTML + "5";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_6.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "6";
        } else {
            x.innerHTML = x.innerHTML + "6";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "6";
        } else {
            y.innerHTML = y.innerHTML + "6";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_7.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "7";
        } else {
            x.innerHTML = x.innerHTML + "7";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "7";
        } else {
            y.innerHTML = y.innerHTML + "7";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_8.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "8";
        } else {
            x.innerHTML = x.innerHTML + "8";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "8";
        } else {
            y.innerHTML = y.innerHTML + "8";
        }
        ans.innerHTML = y.innerHTML;
    }
});
btn_9.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML === "x") {
            x.innerHTML = "9";
        } else {
            x.innerHTML = x.innerHTML + "9";
        }
        ans.innerHTML = x.innerHTML;
    } else {
        if (y.innerHTML === "y") {
            y.innerHTML = "9";
        } else {
            y.innerHTML = y.innerHTML + "9";
        }
        ans.innerHTML = y.innerHTML;
    }
});

let myTimeout = null;

function myTrigger() {
    ans.classList.toggle("hidden");
    clearInterval(myTimeout);
    myTimeout = null;
}

// +

btn_eq.addEventListener("click", function () {
    let x = Number(document.querySelector(".x").innerHTML);
    let y = Number(document.querySelector(".y").innerHTML);

    switch (type) {
        case "+":
            z = x + y;
            break;
        case "-":
            z = x - y;
            break;
        case "*":
            z = x * y;
            break;
        case "/":
            z = x / y;
            break;
        case "%":
            z = x % y;
            break;
    }

    document.querySelector(".z").innerHTML = z;
    document.querySelector(".ans").innerHTML = z;
    document.querySelector(".x").style.background = "#A8AAFF";
    document.querySelector(".y").style.background = "transparent";

    document.querySelector(".x").innerHTML = "x";
    document.querySelector(".y").innerHTML = "y";

    select = "x";
});
// +
btn_plus.addEventListener("click", function () {
    document.querySelector(".plus").innerHTML = "+";
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
    type = "+";
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
// -
btn_minus.addEventListener("click", function () {
    document.querySelector(".plus").innerHTML = "-";
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
    type = "-";
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
// *
btn_multi.addEventListener("click", function () {
    document.querySelector(".plus").innerHTML = "×";
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
    type = "*";
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
// /(割る)
btn_div.addEventListener("click", function () {
    document.querySelector(".plus").innerHTML = "÷";
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
    type = "/";
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
// clear
btn_clear.addEventListener("click", function () {
    x.innerHTML = "x";
    y.innerHTML = "y";
    document.querySelector(".z").innerHTML = "z";
    document.querySelector(".ans").innerHTML = "z";
    ans.innerHTML = "0";
    select = "x";
    type = "+";
    document.querySelector(".x").style.background = "#A8AAFF";
    document.querySelector(".y").style.background = "transparent";
    document.querySelector(".plus").innerHTML = "+";
});

// ±
btn_plus_minus.addEventListener("click", function () {
    if (select === "x") {
        if (x.innerHTML !== "x") {
            x.innerHTML = x.innerHTML * -1;
            ans.innerHTML = x.innerHTML;
        }

    }
    if (select === "y") {
        if (y.innerHTML !== "y") {
            y.innerHTML = y.innerHTML * -1;
            ans.innerHTML = y.innerHTML;
        }

    }
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
// %
btn_percent.addEventListener("click", function () {
    document.querySelector(".plus").innerHTML = "%";
    x.style.background = "transparent";
    y.style.background = "#A8AAFF";
    select = "y";
    type = "%";
    ans.classList.toggle("hidden");
    myTimeout = setInterval(myTrigger, 50); // 0.5s
});
