//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow{
    constructor(title, genre, rating, numOfEp){
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.numOfEp = numOfEp
    }

    play(){
        console.log("Playing")
    }
    pause(){
        alert("The show has been paused!")
    }
    rate(num){
        console.log(`You rated this show ${num} stars!`)
    }
}

let bigMouth = new MakeNetflixShow('Big Mouth', 'raunchy animation', '5/5', '48')