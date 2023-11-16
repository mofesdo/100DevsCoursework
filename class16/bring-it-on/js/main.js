// *Variables*
// Create a variable and console log the value
let val = 0;
console.log(val)

// Create a variable, add 10 to it, and alert the value
let val2 = 0;
val2 = val2 + 10;
alert(val2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4){
    let dif = num1 - num2 - num3 - num4
    alert(dif)
}
// Create a function that divides one number by another and returns the remainder
function mod(num1, num2){
    let remainder = (num1%num2)
    return remainder
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
    let sum = num1 + num2
    if(sum > 50){
        alert("jumanji")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult(num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product%3 == 0){
        alert("ZEbra")
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function printX(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}

