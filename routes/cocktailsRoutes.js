const cocktailController = require("../controllers/cocktailsController");
const express = require("express");
const router = express.Router();

router.get("/", cocktailController.getAllcocktails);
router.get("/:id", cocktailController.getOneCocktails);
router.post("/", cocktailController.createOneCocktails);
// router.put("/:id",cocktailController.updataOneCocktails);
router.delete("/:id",cocktailController.deleteOneCocktails);




module.exports = router;