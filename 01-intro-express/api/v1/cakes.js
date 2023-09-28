const express = require("express");
const router = express.Router();

//Los codigos de estados y los verbos de HTTP (GET, POST, PUT, PATCH, DELETE )
//Son una CONVENCION, no son una regla (no es una obligacion)
//Cada desarrollador puede usar los que quiera
//PERO NO ES RECOMENDABLE ES UNA MALA PRACTICA

//Ejemplo de buena paractiva: Uso path en vez de GET
//uso de 207 en vez de 200, asi como 401 en vez 200

router.patch('/api/v1/cakes/:cakeId', (request, response) => {
    const { cakeId } = request.params
    if (cakeId > 100){
        response.status(401).send({
            message: 'El pastel esta feo'
        })
    }else {
        const mensaje = {
            id: `El id del pastel es ${cakeId}`
        }
        response.status(207).send(mensaje)
        return
    }
    response.send(cakeId)
})

module.exports = router