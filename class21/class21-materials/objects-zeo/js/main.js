//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.currentTime = 12;
stopwatch.color = "black";
stopwatch.brand = "Gucci";
stopwatch.screen ="led";

stopwatch.tellTime = function(){
    console.log(stopwatch.currentTime)
}

stopwatch.tellColor = function(){
    console.log(stopwatch.color)
}

stopwatch.flex = function(){
    console.log(stopwatch.brand)
}