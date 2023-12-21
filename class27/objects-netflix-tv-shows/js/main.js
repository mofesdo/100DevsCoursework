//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow{
    constructor(name, genre, audience, language){
        this.name = name;
        this.genre = genre;
        this.audience = audience;
        this.language = language
    }

    play(){
        console.log("the show has started!")
    }
    pause(){
        alert("The show has been paused!")
    }
    rate(num){
        console.log(`You rated this show ${num} stars!`)
    }
}
