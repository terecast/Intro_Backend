const express = require('express');
//Router es un objeto que nos va a permitir crear rutas
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "type": "dog",
            "age": 2,

        },
        {
            "id": 2,
            "name": "Misifu",
            "type": "cat",
            "age": 1,

        },
        {
            "id": 3,
            "name": "Piolin",
            "type": "bird",
            "age": 3,

        },
        {
            "id": 4,
            "name": "Perry",
            "type": "platypus",
            "age": 4,

        },
        {
            "id": 5,
            "name": "Wally",
            "type": "dog",
            "age": 2,

        },
    ]
}

//Query
//Query params: url/api/v1/pets?age=36type=dog
//Son similares a los params pero se suelen mandar en la URL
//para mandar uno o mas datos
//Las Querys son abiertas y no definimos cuantas variables 
//nos tienen que mandar, ni como se llaman, nuestra responsabilidad es 
//llamar solo las que nos interesan

router.get('/api/v1/pets', (request, response) => {
    const { age, type } = request.query
    if (!age && !type) {
        response.status(200).send(petList)
        return
    }
    const filteredPets = petList.pets.filter(pet => {
        return pet.age == age || pet.type == type
    })
    response.status(200).send(filteredPets)
    return
})

/*PARAMS*/
//Obtener parametros de las rutas dinamicas
// Params 'URL/api/v1/pets/1'
//Los : en las rutas indican que es un valor dinamico (params)

router.get('/api/v1/pets/:id', (request, response) => {
    console.log('Params de onePet', request.params)

    const onePet = petList.pets.find(pet => pet.id == request.params.id)

    onePet ? response.status(200).send(onePet) : 
    response.status(404).send({
        message: 'Pet not found'
    })

})


module.exports = router