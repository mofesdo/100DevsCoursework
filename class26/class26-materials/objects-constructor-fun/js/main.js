//Create a constructor with 4 properties and 3 methods

function MakePhone(brand, color, provider, price){
    this.brand = brand;
    this.color = color;
    this.provider = provider;
    this.price = price;

    this.call = function(provider){
        if(provider == null){
            console.log("sorry you dont have any phone providers!")
        }
        else{
            console.log("ring, ring, ring!")
        }
    }

    this.youtube = function(){
        console.log("you are now watching youtube")
    }

    this.flashlight = function(){
        console.log("Flashlight is now on!")
    }
}