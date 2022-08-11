const uuid = require("uuid");

const DB = require("../data/DB");
const { cocktails } = DB;



const allCocktails = () =>{
    return cocktails;
};

const oneCocktail = (id) =>{
    const oneCocktail = cocktails.find((cocktail) => cocktail.id === id);
    return oneCocktail;
};

const createCocktail = (name, recipe, prep, price, stock) => {
    const newCocktail = {
        id: uuid.v4(),
        name,
        recipe,
        prep,
        price,
        stock,
    };
    console.log(newCocktail);
    cocktails.push(newCocktail);
};

const updataOneCocktails = (id) => {

}

const deleteOneCocktails = (id) => {
   const deleteOneCocktails = cocktails.filter((cocktail) => cocktail.id === id);

   return deleteOneCocktails;
}

module.exports = {
    allCocktails,
    oneCocktail,
    createCocktail,
    deleteOneCocktails
};