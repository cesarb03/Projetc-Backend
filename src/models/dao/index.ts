let productDao: any

switch (process.env.DB_PROVIDER) {
  case 'mongodb':
    import('./products/daoProductsMongoDb').then((dao) => (productDao = dao.default))
    break

  default:
    productDao = require('./products/daoProductsMongoDb')
    break
   
    
}

export { productDao }