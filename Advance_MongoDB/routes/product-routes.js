const { insertProducts, getProducts } = require("../controllers/product-controller");

const router = require("express").Router();


router.post('/add', insertProducts)
router.get('/get', getProducts)

module.exports = router;