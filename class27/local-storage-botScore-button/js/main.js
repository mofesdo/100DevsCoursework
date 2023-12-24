//Create a button that adds 1 to a botScore stored in localStorage 

localStorage.setItem("score", 0)
document.querySelector("h2").addEventListener("click", incrementScore());