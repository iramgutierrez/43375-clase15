const productModel = require('../models/productModels')
const { param } = require('../routers/productsRouter')

class ProductManager {
    constructor() {
        this.model = productModel
    }

    async getAllProducts() {
        return this.model.find()
    }

    async getProductById(id) {
        return this.model.findById(id)
    }

    async addProduct() {

    }

    async updateProduct() {

    }

    async deleteProduct() {

    }

}

module.exports = ProductManager