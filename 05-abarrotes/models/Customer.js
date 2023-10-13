// El modelo trae los datos de la BD
// No se encarga de validad datos ni de resolver promesas

// paso 1 . Nesesito traer la conf del entorno de knex y los detalles de la conexion
// de la BD
const knex = require('../config')

// Paso 2 . crear una funcion que me permita insertar un registro en la tabla de Homes
const create = (body) => {
  return knex
    .insert(body) // que datos vamos a insertar?
    .from('customer') // En que tabla?
    .returning(
      ['customer_id', 'customer_name', 'first_name', 'last_name', 'email', 'phone', 'address',
        'neighborhood', 'city', 'postal_code'])
}

const findAllCustomers = () => {
  return knex
    .select('*')
    .from('customer')
    // .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}

const findOneCustomer = (customerId) => {
  return knex
    .select(['customer_id', 'customer_name', 'first_name', 'last_name', 'email', 'phone', 'address', 'neighborhood', 'city', 'postal_code'])
    .from('customer')
    .where({ customer_id: customerId })
}

const updateCustomer = (customerId, body) => {
  return knex
    .update(body)
    .from('customer')
    .where({ customer_id: customerId })
    .returning(['customer_id', 'customer_name', 'first_name', 'last_name', 'email', 'phone', 'address', 'neighborhood', 'city', 'postal_code'])
}

// Voy a borrar un registro de manera REAL de la base de datos del
const destroyCustomer = (customerId) => {
  return knex
    .del() // delete
    .from('customer')
    .where({ customer_id: customerId })
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (customerId) => {
  return knex
    .update({ active: false })
    .from('customer')
    .where({ customer_id: customerId })
}
// Querys Mini proyecto//

// 1.- ID de los clientes de Monterrey
const MonterreyCustomerId = () => {
  return knex
    .select('customer_id', 'city')
    .from('customer')
    .where({ city: 'Monterrey' })
}
// 3. ID y nombre de los clientes, cantidad vendida, y descripción del producto,
// en las ventas en las cuales se vendieron más de 10 unidades.

const ejercicioTres = () => {
  return knex
    .select('customer.customer_id',
      'customer.customer_name',
      'sales.qty',
      'product.description')
    .from('customer')
    .innerJoin('sales', 'sales.customer_id', 'customer.customer_id')
    .innerJoin('product', 'product.sku', 'sales.sku')
    .where('sales.qty', '>', '10')
}

// 4. ID y nombre de los clientes que no aparecen en la tabla de ventas
// clientes que no han comprado productos OK

const nonBuy = () => {
  return knex
    .select('customer.customer_id', 'customer.customer_name')
    .from('customer')
    .leftJoin('sales', 'customer.customer_id', 'sales.customer_id')
    .whereNull('sales.customer_id')
}

// 5. ID y nombre de los clientes que han comprado
// todos los productos de la empresa OK

const buyAllProducts = async () => {
  const queryA = knex
    .select('sales.customer_id', 'sales.sku')
    .from('sales')
    .groupBy('sales.customer_id', 'sales.sku')
    .orderBy('sales.customer_id', 'sales.sku')

  const queryB = await knex
    .count('sku')
    .from('product')
    .first()

  return knex
    .select('customer.customer_name')
    .from(queryA.as('sumaTotal'))
    .join('customer', 'customer.customer_id', 'sumaTotal.customer_id')
    .groupBy('sumaTotal.customer_id', 'customer.customer_name')
    .havingRaw('COUNT(*) = ?', queryB.count)
}

// 6. ID y nombre de cada cliente y la suma total
// (suma de cantidad) de los productos que ha comprado.
const sumaBuyCust = () => {
  return knex
    .select('customer.customer_id', 'customer.customer_name')
    .sum('sales.qty')
    .from('customer')
    .leftJoin('sales', 'customer.customer_id', 'sales.customer_id')
    .groupBy('customer.customer_id', 'customer.customer_name')
}

// 9. Nombre de las ciudades en las que se han vendido todos los productos.

module.exports = {
  create,
  findAllCustomers,
  findOneCustomer,
  updateCustomer,
  destroyCustomer,
  softDelete,
  MonterreyCustomerId,
  ejercicioTres,
  nonBuy,
  buyAllProducts,
  sumaBuyCust

}
