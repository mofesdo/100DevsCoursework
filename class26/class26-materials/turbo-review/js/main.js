// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let affirmation = "I will land a software engineer role early next year!"

function affirmationXTimes(msg, num){
    for(let i = 0; i < num; i++){
        console.log(msg)
    }
}

affirmationXTimes(affirmation, 5)
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let letters = ["h","e","l","l","o"," ","w","o","r","l",'d']

let word = ""
for(let i = 0; i < letters.length; i++){
    word = word + letters[i]
}

alert(word)
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

