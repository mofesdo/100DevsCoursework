//Create a button that adds 1 to a botScore stored in localStorage 
if(localStorage.getItem("score") == null){
    localStorage.setItem("score", 0)
}
document.querySelector('.increment').addEventListener('click', incrementScore)
document.querySelector('.decrement').addEventListener('click', decrementScore)

function incrementScore(){
    increment = Number(localStorage.getItem("score")) + 1;
    localStorage.setItem("score", increment)
    document.querySelector("h2").innerText = "Score: " + increment
}

function decrementScore(){
    decrement = Number(localStorage.getItem("score")) + -1;
    localStorage.setItem("score", decrement)
    document.querySelector("h2").innerText = "Score: " + decrement
}
console.log(localStorage.getItem("score"))