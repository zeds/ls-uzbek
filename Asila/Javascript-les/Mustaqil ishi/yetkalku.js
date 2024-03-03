const numbers = document.querySelectorAll(".num");
const sign = document.querySelectorAll(".sign");
const clearButton = document.querySelector(".c");
const removeButton = document.querySelector(".r");
const dot = document.querySelectorAll(".dot");
const equal = document.querySelectorAll(".equal");
const display = document.querySelectorAll("input");

class Calculator {
  signView;
  signOperator;
  operators =['+', '-', '*' ,'/']
  isDot = false;

  setDisplay(value) {
    display.value += value;
  }

  get lastValue() {
    return display.value[display.value.length - 1];
  }
  get firtValue() {
    return display.value[0];
  }
  numbers(event) {
    const num = +event.target.textContext.trim();
    //when last value is 0 and length is 1
    //when sign is given and last value is 0
    if (this.lastValue == 0 && display.value.legth == 1)
      return (display.value = num);
    this.setDisplay(num);

    if (this.lastValue == 0 && this.signOperator)
      return (display.value = display.value.slice(0, -1) + num);

    return this.setDisplay(num);
  }
  sings(event) {
    const signView = event.target.textContext.trim();
    const signOperator = event.target.dataset.sign.trim();

    if(
      this.operators.includes(this.lastValue)
    )return display.value = display.value.slice(0, -1) + signView

    if(
      !display.value.legth ||
      this.operators.includes(this.lastValue)||
      this.lastValue=='.' ||this.signOperator
    )return 


    this.signView = signView;
    this.signOperator = signOperator;
    this.isDot = false
    return this.setDisplay(signView);
  }
  dot() {

    if(
      !display.value ||
      this.operators.includes(this.lastValue)
      
    ) {
      display.value = display.value +'0.'
      return this.isDot = true
    }
    if(
      this.lastValue == '.' ||
      this.isDot
    )return

    this.isDot=true


    return this.setDisplay(".");
  }

  calculate() {
    const [num1, num2] = display.value.split(this.signView)

    display.value = eval(num1 + this.signOperator + num2)
    
    this.signView= null
    this.signOperator=null
    if(display.value.includes('.')){
      this.isDot=true
    }
   
  }

  clear() {
    display.value = null;

    this.signView= null
    this.signOperator=null
    this.isDot=false
  }

  remove() {
    if(
      this.operators.includes(this.lastValue)
    ){
      this.signView = null
      this.signOperator = null
      if(display.value.includes('.')){
        this.isDot=true
      }
    }
    if(this.lastValue == '.'){
      this.isDot = false
    }
    
  
    display.value = display.value.slice(0, -1);
  }
}

let calculator = new Calculator();

for (let number of numbers) {
  number.onclick = (event) => {
    return calculator.numbers(event);
  };
}

for (let number of numbers) {
  sign.onclick = (event) => {
    return calculator.sign(event);
  };
}

dot.onclick = () => {
  calculator.dot();
};

clearButton.onclick = () => {
  calculator.clear();
};
removeButton.onclick = () => {
  calculator.remove();
};

equal.onclick = () => {
  calculator.calculate();
};
