//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Mean Girls", "UP", "Home Alone", "Surfs Up"]

for(let i = 0; i < movies.length; i++){
    console.log("in for loop")
    document.querySelector("h2").innerText += movies[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1, 2, 3, 4]

for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] + 3;
    console.log(numbers[i])
}

//Find the average of all the numbers from question three

let avg = 0;
for(let i = 0; i <numbers.length; i++){
    avg += numbers[i]
}
console.log(avg/numbers.length)