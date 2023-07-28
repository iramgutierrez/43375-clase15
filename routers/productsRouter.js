const {Router} = require('express')
const ProductManager = require('../managers/ProductManager')
const productsRouter = Router()
const productManager = new ProductManager()


productsRouter.get('/', async(req, res) => {
    const products = await productManager.getAllProducts()
    res.json(products);
})

productsRouter.get('/:pid',async (req, res) => {
    const {pid} = req.params
    const product=await productManager.getProductById(pid)
    return res.json(product)
})

productsRouter.post('/', (req, res) => {

})

productsRouter.put('/:pid', (req, res) => {

})

productsRouter.delete('/:pid', (req, res) => {

})

module.exports = productsRouter