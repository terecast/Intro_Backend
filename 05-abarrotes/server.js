// 1. llamar las bibliotecas de express (importarla)
const express = require('express')
const customerRoutes = require('./routes/customerRoutes')
const productRoutes = require('./routes/productRoutes')
const salesRoutes = require('./routes/salesRoutes')

// 2. Crear la instacioa de express
const app = express()

// 3 .Configurar la app de express (app.use)
/* Middleware */
app.use(express.urlencoded({ extended: true })) // permite recibir datos especiales
app.use(express.json()) // Este trabaja con JASON

// 4. crear una ruta (app.get)
app.use('/', customerRoutes)
app.use('/', productRoutes)
app.use('/', salesRoutes)

// 5. inicializar el servidor
app.listen(3002, () => {
  console.log('Servidor escuchando con el puerto 3002')
})
