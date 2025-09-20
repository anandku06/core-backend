const { insertProducts, getProductStats, getProductAnalysis } = require("../controllers/product-controller");

const router = require("express").Router();


router.post('/add', insertProducts)
router.get('/stats', getProductStats)
router.get('/analysis', getProductAnalysis)

module.exports = router;