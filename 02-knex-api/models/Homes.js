// El modelo trae los datos de la BD
// No se encarga de validad datos ni de resolver promesas

// paso 1 . Nesesito traer la conf del entorno de knex y los detalles de la conexion
// de la BD
const knex = require('../config')

// Paso 2 . crear una funcion que me permita insertar un registro en la tabla de Homes

const create = (body) => {
  return knex
    .insert(body) // que datos vamos a insertar?
    .from('homes') // En que tabla?
    .returnig(
      ['house_Id', 'title', 'description', 'guests', 'address',
        'rental_price', 'fk_user', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}

const findOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ house_id: houseId })
    .where('active', true)
}

const update = (houseId, body) => {
  return knex
    .update(body)
    .from('homes')
    .where({ house_id: houseId })
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

// Voy a borrar un registro de manera REAL de la base de datos del
const destroy = (houseId) => {
  return knex
    .del() // delete
    .from('homes')
    .where({ house_id: houseId })
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where({ house_id: houseId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
