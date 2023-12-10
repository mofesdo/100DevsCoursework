//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [5, 10, 15, 20]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}
alert(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr){
    let squaredArr = []
    for(let i = 0; i < arr.length; i++){
        squaredArr[i] = arr[i] * arr[i]
    }
    return squaredArr
}
console.log(squared(numbers))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    let revStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i]
    }
    return revStr
}

let str = "hello"
console.log(reverseStr(str))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    for(let i = 0; i< str.length/2; i++){
        if(str[i] != str[str.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))