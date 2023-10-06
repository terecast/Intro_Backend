// 1. llamar las bibliotecas de express (importarla)
const express = require('express')
const rutasEjercicios = require('./api/v1/rutas')

//2. Crear la instacioa de express
const app = express()

//3 .Configurar la app de express (app.use)
/* Middleware */
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api', rutasEjercicios)



//4. crear una ruta (app.get)
app.get('/', (request, response) => {
    response.send('Hola Mundo 2')
})

//5. inicializar el servidor
app.listen(3001,() => {
    console.log('Servidor escuchando con el puerto 3001')
})

