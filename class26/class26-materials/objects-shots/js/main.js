//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('.nextButton').addEventListener('click', getNextDrink)
let drink = ""
let drinkCount = 0;
let count = 0;
function getDrink(){
    drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerHTML = data.drinks[0].strInstructions
        drinkCount = data.drinks.length;
        console.log(drinkCount)
        count++;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getNextDrink(){
    //let nextDrink = document.querySelector('input').value
    if(count >= drinkCount){
        count = 0;
    }
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.drinks[count].strDrink
        document.querySelector('img').src = data.drinks[count].strDrinkThumb
        document.querySelector('h3').innerHTML = data.drinks[count].strInstructions
        count++;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}