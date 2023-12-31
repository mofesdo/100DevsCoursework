// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "is this thing on?"

if(sentence.includes("?")){
    alert(sentence)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let developer = "jr. dev, that is what I am"
console.log(developer.replaceAll("jr. dev", "software engineer"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let num = Math.random();
    if(num < .33){
        return "rock"
    }
    else if(num < .66 && num > .33){
        return "paper"
    }
    else if(num > .66){
        return "scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playAgainstBot(choice){
    let bot = rockPaperScissors();
    if(choice == bot){
        console.log("you tied")
    }
    if((choice == "rock" && bot == "scissors") || (choice == "scissors" && bot == "paper") || (choice == "paper" && bot == "rock")){
        console.log("you won")
    }
    else{
        console.log("you lost")
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playXTimes(numbers){
    for(let i = 0; i <numbers.length; i++){
        playAgainstBot(numbers[i])
    }
}

let arr = ["rock", "paper", "scissors"]

playXTimes(arr)