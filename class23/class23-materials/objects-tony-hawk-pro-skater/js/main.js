//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkate(board, stance, push, style){
    this.board = board;
    this.stance = stance;
    this.push = push;
    this.style = style;

    this.ollie = function(){
        console.log("ollied over the curb")
    }

    this.bail = function(){
        console.log("oh FUUUUUUU...")
    }
    this.kickflip = function(){
        alert("siiiick! you did a kickflip")
    }
}

let modesto = new MakeSkate("local", "goofy", "regular", "street")