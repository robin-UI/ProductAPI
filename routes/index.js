var express = require('express');
var router = express.Router();
var { store } = require('../config/multer');
const { getAllProduct, addProduct, editProduct, deleteProduct } = require('../controller/productCtrl');

/* GET All Products. */
router.get('/getAllProduct', getAllProduct );

/* POST All Products. */
router.post('/addproduct', store.array("image", 4), addProduct)

/* PUT Edit A Products. */
router.put('/editProduct/:id', store.array("image", 4), editProduct)

/* DELETE A Products. */
router.delete('/deleteProduct/:id', deleteProduct)


module.exports = router;
