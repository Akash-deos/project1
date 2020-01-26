const calculatorScreen=document.querySelector(`.calculator-screen`)
const updateScreen=(number) => {
    calculatorScreen.value=number
}
let prevInput='0'
let calculationOperator=''
let currentInput='0'
const numbers=document.querySelectorAll(".number")
const inputNumber=(number) =>{
    if(currentInput==='0'){
        currentInput=number
    }else{
        currentInput+=number;
    }
}
numbers.forEach((number)=>{
    number.addEventListener("click",(event) =>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
const operators=document.querySelectorAll(".operator")
const inputOperator=(operator)=>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
}
operators.forEach((operator) =>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})
const equalSign=document.querySelector(".equal-sign")
equalSign.addEventListener("click",()=>)