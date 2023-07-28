const {Router} = require('express')
const ProductManager = require('../managers/ProductManager')
const productsViewsRouter = Router()
const productManager = new ProductManager()


productsViewsRouter.get('/', async(req, res) => {
    const products = await productManager.getAllProducts()
    console.log({ products })
    return res.render('products/products', { products })
})

module.exports = productsViewsRouter