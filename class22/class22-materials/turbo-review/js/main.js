// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drank = "Lemonade"
console.log(drank.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let appleString = "My favorite fruit is apple"
if(appleString.search("apple") != -1){
    console.log("Yes")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let ran = Math.random();
    if(ran < .33){
        return "rock"
    }
    else if(ran > .33 && ran < .66){
        return "paper"
    }
    else{
        return "scissors"
    }
}
rockPaperScissors();
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperBot(choice){
    let bot = rockPaperScissors();
    if(choice == "rock" && bot == "paper"){
        return "you won!"
    }
    else if(choice == "rock" && bot == "scissors"){
        return "you lost!"
    }
    else if(choice == "rock" && bot == "rock"){
        return "you tied!"
    }
    else if(choice == "paper" && bot == "scissors"){
        return "you lost!"
    }
    else if(choice == "paper" && bot == "rock"){
        return "you won!"
    }
    else if(choice == "rock" && bot == "scissors"){
        return "you lost!"
    }
    else if(choice == "paper" && bot == "paper"){
        return "you tied!"
    }
    else if(choice == "scissors" && bot == "rock"){
        return "you lost!"
    }
    else if(choice == "scissors" && bot == "scissors"){
        return "you tied!"
    }
    else if(choice == "scissors" && bot == "paper"){
        return "you won!"
    }
}

console.log(rockPaperBot("scissors"))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function runGames(choices){
    choices.forEach(element => {
        console.log(rockPaperBot(element))
    });
}
let arr = ["rock", "paper", "scissors"]
runGames(arr)