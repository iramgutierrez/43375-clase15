
class ProductsDAOMemory {
  constructor () {
    this.products = [
      {
        title: "producto1",
        price: 100,
        id: 1
      },
      {
        title: "producto2",
        price: 100,
        id: 2
      },
      {
        title: "producto3",
        price: 100,
        id: 3
      },
      {
        title: "producto4",
        price: 100,
        id: 4
      },
    ]
  }

  getAll () {
    return Promise.resolve(this.products)
  }
}

module.exports = ProductsDAOMemory