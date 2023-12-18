//Create a dog object that has four properties and three methods

let dog = {};

dog.breed = "pug"
dog.age = "4"
dog.size = "small"
dog.stinky = true;

dog.pee = function(){
    console.log("psssssss")
}

dog.growl = function(){
    console.log("grrrrr")
}

dog.shower = function(stinky){
    if(dog.stinky == true){
        console.log("I need a bath!")
    }
}