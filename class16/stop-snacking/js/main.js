//Create a function that grabs the number of snacks from the input and tells you to stop that many times


function stop(){
    let snacks = document.querySelector("input").value
    document.querySelector("#stops").innerText = ""

    for(let i = 1; i <= snacks; i++){
        document.querySelector("#stops").innerText += "STOP!  "
    }
}

document.querySelector("#help").addEventListener("click", stop)