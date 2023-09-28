// Paso 1. Llamar a las bibliotecas de Express (importarla)
const express = require('express');
const petRouter = require('./api/v1/pets')
const cakeRouter = require('./api/v1/cakes')

// Paso 2. Crear una instancia de Express (crear una aplicacion de express)
const app = express()

// Paso 3. Configurar la app de express (app.use)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Paso 4. Crear una ruta (app.get)
app.get('/', (request, response) => {
    response.send('Hola Mundo Devf 2')
})

//Paso 6. Importar rutas en otros archivos, con ayuda del router de express
app.use(petRouter)
app.use(cakeRouter)


// Paso 5. Inicializar el Servidor (app.listen)
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})
