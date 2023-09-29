/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Aqui colocamos la logica de tablas
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary() // En knex usamos increments en lugar de serial
        table.string('title').notNullable()
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').defaultTo(true) // DefaulTo especifico un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // Me devuelve la fecha/hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Aqui colocamos toda la logica para deshacer los cambios de arriba
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* GUIA RAPIDA DE USO KNEX */

// Crear una Migracion
// knex migrate:make nombre_de_la_migracion

// **EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP()
// Ejecutar la ultima migracion (up): knex migrate:latest
// Ejecutar todas las migraciones (up): knex migrate:up
// Ejecutar una migracion especifica (up): knex migrate:up nombre_de_la_migracion.js

// **EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN()
// Ejecutar la ultima migracion (up// Ejecutar la ultima migracion (up): knex migrate:lates): knex migrate:latest
