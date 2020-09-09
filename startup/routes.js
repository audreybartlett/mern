const products = require('../routes/products');
const bodyParser = require('body-parser');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use('/api/products', products);
    app.use(error);
}