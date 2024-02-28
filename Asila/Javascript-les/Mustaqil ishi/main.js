const input = document.querySelector(".inputValue")
const num = document.querySelectorAll(".num")
const equal = document.querySelector(".equal")
let belgi = false

function myFunction(num){
    if(!belgi  +num){
        input.value += num
    }
    if(num == "+"||  num == "-" || num =="*" || num == "/"){
        belgi = true
    }
}

function myClear(){
    input.value = ""
}

equal.addEventListener("click", e=>{
    
    belgi = false
    let simvol = input.value.includes("+") ? "+" : input.value.includes("-") ? "-" : input.value.includes("*")? "*" : "/"
    sonlar = input.value.split(simvol)
    let sum = +sonlar[0]

        if(simvol == "+"){
            sum += +sonlar[1]
        }
        else if(simvol == "-"){
            sum -= +sonlar[1]
        }
        else if(simvol == "*"){
            sum *= +sonlar[1]
        }
        else {
            sum /= +sonlar[1]
        }
    input.value = sum
})