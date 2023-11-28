//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["Regular Show", "Rick & Morty", "Bob's Burgers"]
shows.forEach(element => {
  console.log(element)  
});
//Create and array of numbers
let nums = [2, 5, 3, 4, 1]
//Return a new array of numbers that includes every even number from the previous Arrays
let evenNums = []
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
        evenNums.push(nums[i])
    }
}
console.log(evenNums)
//Create a function that takes in an array of numbers
function secondBest(arr){
    arr.sort()
    console.log(arr)
    alert(arr[1] + arr[arr.length-2])
}
secondBest(nums)
//Alert the sum of the second lowest and the second highest number
