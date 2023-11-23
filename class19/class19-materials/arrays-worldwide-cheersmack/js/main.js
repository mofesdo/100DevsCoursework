//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function count(num){
    let arr = []
    for(let i = 0; i <=num; i++){
        arr[i] = i
    }
    return arr
}
console.log(count(80))