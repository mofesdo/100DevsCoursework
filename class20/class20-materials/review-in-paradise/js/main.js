// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = "burgers"
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "No"
alert(string[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divThenMult(num1, num2, num3){
    let product = (num1/num2)*num3
    alert(product);
}
divThenMult(10, 5, 3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    let root = Math.sqrt(num)
    console.log(root)
}
cubeRoot(16)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month){
    if(month === "June" || month === "July" || month === "August"){
        alert("YAY")
    }
    else{
        alert("Boooo")
    }
}
summer("June")
summer("December")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFives(num){
    for(let i = 0; i < num; i++){
        if(i%5 != 0){
            console.log(i);
        }
    }
}

skipFives(50)