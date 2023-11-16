//Create a conditonal that checks their age
function checkAge(){
    const age = document.querySelector("#danceDanceRevolution").value
    //If under 16, tell them they can not drive
    if(age < 16){
        console.log("you cannot drive")
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if(age < 18){
        console.log("you can't hate from outside the club, because you can't even get in")
    }
    //If under 21, tell them they can not drink
    else if(age < 21){
        console.log("you cant drink alcohol")
    }
    //If under 25, tell them they can not rent cars affordably
    else if(age < 25){
        console.log("you cannot rent cars affordably")
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if(age < 30){
        console.log("you cannot rent fancy cars affordably")
    }
    //If under over 30, tell them there is nothing left to look forward too
    else{
        console.log("there is nothing left to look forward too")
    }
}

//--- Harder
//On click of the h1
const h1 = document.querySelector("h1");
h1.addEventListener('click', checkAge)
//Take the value from the input
//Place the result of the conditional in the paragraph
