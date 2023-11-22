// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let value = false;

alert(value)
// Declare a variable, reassign it to your favorite color, and console log the value
let color;
color = "black";
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function equation(num1, num2, num3, num4){
    return (num1 + num2 + num3)/num4 
}
let answer = equation(1, 2, 3, 2)
console.log(answer)
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(num1, num2){
    let pow = 1
    for(let i = 0; i < num2; i++){
        pow = pow * num1
    }
    return pow
}
let answer2 = power(10, 3)
console.log(answer2)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertIfTrue(bool, string){
    if(bool == true){
        alert(string)
    }
    else{
        console.log(string)
    }
}
let short = true;
alertIfTrue(short, "Yessir im a short king")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function logAll(num){
    for(let i = 1; i <= num; i++){
        if(i%3 == 0 && i%5== 0){
            console.log("fizzbuzz")
        }
        else if(i%3 == 0){
            console.log("fizz")
        }
        else if(i%5 == 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}

logAll(15)