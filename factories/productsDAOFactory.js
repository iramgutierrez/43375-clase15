const productsDAOMongo = require('../DAOs/productsDAOMongo')
const productsDAOMemory = require('../DAOs/productsDAOMemory')

const storageMapper = {
  mongo: () => new productsDAOMongo(),
  mysql: () => new productsDAOMysql(),
  memory: () => new productsDAOMemory(),
  default: () => new productsDAOMemory(),
}

module.exports = (storage) => {

  /*
  si storage es igual a mongo

  si tu hicieras storageMapper.storage no estarias haciendo storageMapper.mongo

  */
  console.log({ storage })
  const storageFn = storageMapper[storage] || storageMapper.default
  
  /*let storageFn

  switch (storage) {
    case 'mongo':
      storageFn = storageMapper.mongo
    case 'memory':
      storageFn = storageMapper.memory
    case 'mysql':
      storageFn = storageMapper.mysql
    default:
      storageFn = storageMapper.mongo
  }*/

  const dao = storageFn()

  console.log({ dao })

  return dao
}