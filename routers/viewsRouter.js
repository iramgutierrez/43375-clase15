const {Router} = require('express')
const ProductManager = require('../managers/ProductManager')
const productsViewsRouter = Router()
const productManager = new ProductManager()


productsViewsRouter.get('/', async(req, res) => {
    const products = await productManager.getAllProducts()
    console.log({ products })
    return res.render('products/products', { products })
})

productsViewsRouter.get('/register', (req, res) => {
    res.render('registro');
});

productsViewsRouter.get('/login', (req, res) => {
    res.render('login');
});

module.exports = productsViewsRouter