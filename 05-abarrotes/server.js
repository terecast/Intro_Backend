// 1. llamar las bibliotecas de express (importarla)
const express = require('express')

// 2. Crear la instacioa de express
const app = express()

// 3 .Configurar la app de express (app.use)
/* Middleware */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 4. crear una ruta (app.get)
app.get('/', (request, response) => {
  response.send('Hola Mundo')
})

// 5. inicializar el servidor
app.listen(3002, () => {
  console.log('Servidor escuchando con el puerto 3002')
})
