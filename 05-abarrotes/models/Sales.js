const knex = require('../config')

// Paso 2 . crear una funcion que me permita insertar un registro en la tabla de Homes
const create = (body) => {
  return knex
    .insert(body) // que datos vamos a insertar?
    .from('sales') // En que tabla?
    .returning(
      ['sales_order', 'customer_id', 'sku', 'qty', 'sales_date'])
}

const findAllSales = () => {
  return knex
    .select('*')
    .from('sales')
    // .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}
const findASale = (salesOrder) => {
  return knex
    .select(['sales_order', 'customer_id', 'sku', 'qty', 'sales_order'])
    .where({ sales_order: salesOrder })
}

const updateSales = (salesOrder, body) => {
  return knex
    .update(body)
    .from('sales')
    .where({ sales_order: salesOrder })
    .returning(['sales_order', 'customer_id', 'sku', 'qty', 'sales_order'])
}

// Voy a borrar un registro de manera REAL de la base de datos del
const destroySales = (salesOrder) => {
  return knex
    .del() // delete
    .from('sales')
    .where({ sales_order: salesOrder })
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (salesOrder) => {
  return knex
    .update({ active: false })
    .from('sales')
    .where({ sales_order: salesOrder })
}

// 9. Nombre de las ciudades donde se han vendido todos los productos
const AllProdNameCity = async () => {
  const queryc = knex
    .select('customer_id', 'sku')
    .from('sales')
    .groupBy('customer_id', 'sku')
    .orderBy('customer_id', 'sku')

  const queryd = await knex
    .count('product.sku')
    .from('product')
    .first()

  return knex
    .select('customer.city')
    .from(queryc.as('ciudad'))
    .join('customer', 'customer.customer_id', 'ciudad.customer_id')
    .groupBy('customer.city')
    .havingRaw('COUNT(*) = ?', queryd.count)
}

module.exports = {
  create,
  findAllSales,
  findASale,
  updateSales,
  destroySales,
  softDelete,
  AllProdNameCity
}
