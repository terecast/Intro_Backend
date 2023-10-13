const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Si la ruta es /homes entonces se ejecuta el controlador

router.post('/product', productController.createProduct)
router.get('/product', productController.listAllProducts)
router.get('/product', productController.listOneProduct)
router.patch('/product/:skuId', productController.updateOneProduct)
router.delete('/customer/:skuId', productController.softDeleteOneProduct)
router.delete('/customer/destroyProduct/:skuId', productController.destroyOneProduct)

// Querys Mini proyecto//
// 2.- ID y descripcion de los productos que cuesten menos de 15 pesos OK
router.get('/product/lowthan15', productController.prodLess15)
// 7. ID de los productos que no han sido comprados por clientes de Guadalajara.
router.get('/product/sinventagdl', productController.nonGdlSold)
// 8. ID de los productos que se han vendido a clientes
// de Monterrey y que también se han vendido a clientes de Cancún. OK
router.get('/product/vendidosMtyCun', productController.soldMtyCun)

module.exports = router
