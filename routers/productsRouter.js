const {Router} = require('express')
const productsRouter = Router()

productsRouter.get('/', (req, res) => {
    res.json([]);
})

productsRouter.get('/:pid', (req, res) => {

})

productsRouter.post('/', (req, res) => {

})

productsRouter.put('/:pid', (req, res) => {

})

productsRouter.delete('/:pid', (req, res) => {

})

module.exports = productsRouter