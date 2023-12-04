//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let allNums = [3, 4, 16, 29 , 2]
let sum = 0;
for(let i = 0; i <allNums.length; i++){
    sum =  sum + allNums[i]
}
alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr){
    const squared = arr.map((x) => x * x);
    return squared;
}
let nums = [2, 3, 4, 5]
console.log(squared(nums))
//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str){
    let rev = ""
    for(let i = str.length - 1; i >= 0; i--){
        rev = rev + str[i]
    }
    console.log(rev)
}

reverse("hello")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
