const {Router} = require('express')
const ProductService = require('../services/productsService')
const { passportCall } = require('../config/passportCall')

const productsViewsRouter = Router()
const productService = new ProductService()


productsViewsRouter.get('/products', passportCall('jwt', true), (req, res, next) => {
    if (!req.user) {
        return res.redirect('login')
    }

    return next()
}, async(req, res) => {
    console.log(req.user, req.session)
    const products = await productService.getAllProducts()
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