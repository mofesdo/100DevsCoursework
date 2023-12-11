//Create a dog object that has four properties and three methods

let dog = {}

dog.breed = "pug"
dog.age = "4"
dog.name = "lola"
dog.stinky = true;

dog.snore = function(){
    console.log("Zzzzz")
}

dog.bark = function(){
    console.log("Woooof!")
}

dog.takeBath = function(dog){
    if(dog.stinky == true){
        console.log("dog needs a bath")
    }
}