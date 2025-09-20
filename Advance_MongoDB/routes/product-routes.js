const { insertProducts } = require("../controllers/product-controller");

const router = require("express").Router();


router.post('/add', insertProducts)

module.exports = router;