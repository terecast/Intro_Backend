/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary() // En knex usamos increments en lugar de serial
        table.string('name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable().unique()
        table.string('phone').notNullable().unique() // Que no se repita
        table.string('description')
        table.boolean('active').notNullable().defaultTo(true) // DefaulTo especifico un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // Me devuelve la fecha/hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
