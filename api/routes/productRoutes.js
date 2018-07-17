'use strict';
module.exports = function (app) {
    var products = require('../controllers/productController');
    // products Routes

    app.route('/')
        .get(products.list_all_products)
        .post(products.create_a_product);
        
    app.route('/:productId')
        .get(products.read_a_product)
        .put(products.update_a_product)
        .delete(products.delete_a_product);
};