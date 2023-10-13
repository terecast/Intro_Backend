const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

// Si la ruta es /homes entonces se ejecuta el controlador

router.post('/sales', salesController.createSales)
router.get('/sales', salesController.listAllSales)
router.get('/sales', salesController.listOneSales)
router.patch('/sales/:salesOrder', salesController.updateOneSales)
router.delete('/sales/:salesOrder', salesController.softDeleteOneSales)
router.delete('/sales/destroysales/:salesOrder', salesController.destroyOneSales)

// 9. Nombre de las ciudades donde se han vendido todos los productos
router.get('/sales/ciudadvendiotodosproductos', salesController.cityAllProdSold)

module.exports = router
