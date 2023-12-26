//Create a button that adds 1 to a botScore stored in localStorage 
if(localStorage.getItem("score") == null){
    localStorage.setItem("score", 0)
}
document.querySelector('button').addEventListener('click', incrementScore)

function incrementScore(){
    increment = Number(localStorage.getItem("score")) + 1;
    localStorage.setItem("score", increment)
}

console.log(localStorage.getItem("score"))