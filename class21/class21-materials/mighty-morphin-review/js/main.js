// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "Christmas";
holiday = holiday.toUpperCase();
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Hello";
alert(str.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFive(num1, num2, num3, num4, num5){
    alert(Math.abs(100 - num1 - num2 - num3 - num4 - num5))
}
subFive(10, 20, 5, 5, 100)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowHigh(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1)
    }
    if(num2 < num1 && num2 < num3){
        console.log(num2)
    }
    if(num3 < num1 && num3 < num2){
        console.log(num3)
    }
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    }
    if(num2 > num1 && num2 > num3){
        console.log(num2)
    }
    if(num3 > num1 && num3 > num2){
        console.log(num3)
    }
}
lowHigh(3, 5, 2)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function coinFlip(){
    let random = Math.random();
    if(random < .5){
        return "heads"
    }
    else{
        return "tails"
    }
}
console.log(coinFlip())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous 
//function x times where x is the number passed into the function. Call the function.
function coinFlipXTimes(num){
    for(let i = 0; i < num; i++){
        console.log(coinFlip(), i)
    }
}

coinFlipXTimes(50)