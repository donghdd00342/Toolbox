module.exports = function() {
  return {
    categories: require('./categories.json'),
    customers: require('./customers.json'),
    employees: require('./employees.json'),
    orders: require('./orders.json'),
    products: require('./products.json'),
    regions: require('./regions.json'),
    shippers: require('./shippers.json'),
    suppliers: require('./suppliers.json')
  }
}
