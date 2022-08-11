const cocktailService = require("../services/cocktailService");

const getAllcocktails = (req, res) =>{
    const cocktails = cocktailService.allCocktails();
    res.status(200).json({status: "success", data: cocktails})
};

const getOneCocktails = (req, res) => {
    const oneCocktail = cocktailService.oneCocktail(req.params.id);
    if(oneCocktail === undefined){
        return res.status(404).json({status: "Failed", message: "cocktail not found"});
    }

    res.status(200).json({status: "Success", data: oneCocktail});
}

const createOneCocktails = (req, res) => {
    // if (
    //     !req.body.name||
    //     !req.body.recipe||
    //     !req.body.prep||
    //     !req.body.price||
    //     !req.body.stock

    // ) {
    //     return res.status(418).json({status: "Failed", message: "Missing cocktail information"});
    // }
    cocktailService.createCocktail(req.body);
console.log(`this is from contro ${req.body}`);
    res.status(201).send("create One cocktail");
};

const deleteOneCocktails = (req, res) =>{
    const deleteOneCocktail = cocktailService.deleteOneCocktails(req.params.id);
    if(deleteOneCocktail === undefined){
        return res.status(404).json({status: "Failed", message: "cocktail not found"});
    }
    res.status(200).json({status: "delet", data: deleteOneCocktail});
}


module.exports = {
getAllcocktails,
getOneCocktails,
createOneCocktails,
deleteOneCocktails
};