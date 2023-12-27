//Create a button that adds 1 to a botScore stored in localStorage 
if(localStorage.getItem("score") == null){
    localStorage.setItem("score", 0)
}
document.querySelector("h2").innerText = "Score: " + Number(localStorage.getItem("score"))
document.querySelector('.increment').addEventListener('click', incrementScore)
document.querySelector('.decrement').addEventListener('click', decrementScore)
document.querySelector('.reset').addEventListener('click', resetScore)
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

function resetScore(){
    localStorage.setItem("score", 0)
    document.querySelector("h2").innerText = "Score: " + Number(localStorage.getItem("score"))
}
console.log(localStorage.getItem("score"))