//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// Add event listener to get cocktail button
// Take input and fetch that cocktail
// set name photo and instructions


document.querySelector("button").addEventListener('click', fetchCocktail)

function fetchCocktail(){
    let cocktail = document.querySelector("input").value
    console.log(`cocktail was ${cocktail}`)
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").innerHTML =  data.drinks[0].strDrink 
            document.querySelector("img").src = data.drinks[0].strDrinkThumb
            document.querySelector("h3").innerHTML = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

