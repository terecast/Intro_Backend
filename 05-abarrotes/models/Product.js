const knex = require('../config')

// Paso 2 . crear una funcion que me permita insertar un registro en la tabla de Homes
const create = (body) => {
  return knex
    .insert(body) // que datos vamos a insertar?
    .from('product') // En que tabla?
    .returning(
      ['sku', 'product_name', 'description', 'price'])
}

const findAllProducts = () => {
  return knex
    .select('*')
    .from('product')
    // .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}
const findOneProduct = (skuId) => {
  return knex
    .select(['sku', 'product_name', 'description', 'price'])
    .from('product')
    .where({ sku: skuId })
}

const updateProduct = (skuId, body) => {
  return knex
    .update(body)
    .from('product')
    .where({ sku: skuId })
    .returning(['sku', 'product_name', 'description', 'price'])
}

// Voy a borrar un registro de manera REAL de la base de datos del
const destroyProduct = (skuId) => {
  return knex
    .del() // delete
    .from('product')
    .where({ sku: skuId })
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (skuId) => {
  return knex
    .update({ active: false })
    .from('product')
    .where({ sku: skuId })
}

// Querys Mini proyecto//

// 2.- ID y descripcion de los productos que cuesten menos de 15 pesos OK
const prodlow15Mxp = () => {
  return knex
    .select('sku', 'description', 'price')
    .from('product')
    .where('price', '<', '15')
}
// 7. ID de los productos que no han sido comprados por clientes de Guadalajara. OK
const gdlNonSold = () => {
  const query7 = knex
    .select('*')
    .from('sales')
    .join('customer', 'customer.customer_id', 'sales.customer_id')
    .where('customer.city', '=', 'Guadalajara')

  return knex
    .select('product.sku')
    .from('product')
    .leftJoin(query7.as('custGdl'), 'custGdl.sku', 'product.sku')
    .whereNull('custGdl.sales_order')
    .groupBy('product.sku')
}

// 8. ID de los productos que se han vendido a clientes
// de Monterrey y que también a clientes de Cancún. Ok

const ProdMtyCun = () => {
  const query8 = knex
    .select('sales.sku')
    .from('sales')
    .innerJoin('customer', 'sales.customer_id', 'customer.customer_id')
    .where('customer.city', '=', 'Monterrey', 'customer.city', '=', 'Cancun')

  return knex
    .select('product.sku')
    .from('product')
    .whereIn('product.sku', (query8))
}

module.exports = {
  create,
  findAllProducts,
  findOneProduct,
  updateProduct,
  destroyProduct,
  softDelete,
  prodlow15Mxp,
  gdlNonSold,
  ProdMtyCun

}
