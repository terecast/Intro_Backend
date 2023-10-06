const express = require('express')
//Router es un objeto que nos permite crear rutas
const router = express.Router()
const axios = require('axios')

/* Agrega un endpoint '/api/' que responda a una petición de tipo GET 
con un código de estado 200 y el siguiente json: { 'mensaje':'hola mundo' } */
router.get('/', (request, response) => {
    response.send('Hola Mundo').response(200) 
})

/* Agrega un endpoint '/api/suma' que responda a una petición de tipo GET 
con la suma de dos números que reciba mediante las querys num1 y num2. 
El servidor debe responder con un código de estado 200 y un json como el siguiente: { 'resultado': 7 } */
router.get('/suma', (request, response)=>{
    const { num1, num2 } = request.query
    response.status(200).send({'resultado': parseInt(num1) + parseInt(num2)})
})

/* Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET 
con el nombre que sea recibido a través de params. El servidor debe responder 
con un código de estado 200 y un json como este: { 'usuario': 'Edwin' } */
router.get('/usuario/:nombre', (request, response)=>{
    const { nombre } = request.params
    response.status(200).send({'usuario': nombre })
})


/*Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET 
con el personaje solicitado de https://swapi.dev/. 
El cliente debe mandar el número de personaje mediante params. 
La respuesta del servidor debe lucir algo así 
{ 'personaje': { 'name': 'Luke Skywalker', ..., } } */


router.get('/swapi/:numero', async (request, response)=>{
    const { numero } = request.params
    console.log(numero)
    try{

        const settings = {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }
          console.log(settings)

        const resp = await fetch ('https://swapi.dev/api/people/'+numero, settings)
        const personaje = await resp.json()
        response.status(200).json({'personaje': personaje })
    }
    catch(err) {
        response.status(400)
    }
    
})

/*Agrega un endpoint '/api/body que responda a una petición de tipo PUT 
con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman 
o insomnia que luce como este: { “nombre”: “Maui”, “ocupacion”: “Sensei” } 
Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente,
junto con un status de respuesta 200. */

router.put('/body', (request, response)=>{
    const { nombre, ocupacion } = request.body
    response.status(200).send({'nombre': nombre, 'ocupacion': ocupacion})
})

/* Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, 
a través de una petición POST que responda con el status 200 */
router.post('/suma', (request, response)=>{
    const { num1, num2 } = request.body
    response.status(200).send({'resultado': parseInt(num1) + parseInt(num2)})
})


/* Crea un endpoint para una petición de tipo DELETE donde envíes un ID (un número cualquiera) 
a través de params. Si el param contiene el ID 3, entonces responde con un status 200 
y el mensaje “se ha eliminado el objeto con ID 3”, de lo contrario, si envían cualquier otro número como ID, 
responde con un status 404 y el mensaje “No se encontró el objeto con el ID especificado” */

router.delete('/id', (request, response) => {
    const { id } = request.body
    console.log(request.body)
    if (id == '3') {
        response.status(200).send({mensaje: 'Se ha eliminado el ID 3'} )
        return
    }else{
        
        response.status(404).send({mensaje: 'No se encontro el objeto con el ID especificado'})
        return
    }
    
})
  





module.exports = router