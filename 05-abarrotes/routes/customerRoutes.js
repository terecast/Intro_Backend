const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

// Si la ruta es /homes entonces se ejecuta el controlador

router.post('/customer', customerController.createCustomer)
router.get('/customer', customerController.listAllCustomers)
router.get('/customer', customerController.listOneCustomer)
router.patch('/customer/:customerId', customerController.updateOneCustomer)
router.delete('/customer/:customerId', customerController.softDeleteOneCustomer)
router.delete('/customer/destroyCustomer/:customerId', customerController.destroyOneCustomer)

// Querys Mini proyecto//
// 1.- ID de los clientes de Monterrey OK
router.get('/customer/Monterrey', customerController.customerFromMty)
// 3. ID y nombre de los clientes, cantidad vendida, y descripción del producto,
// en las ventas en las cuales se vendieron más de 10 unidades. OK
router.get('/customer/morethanten', customerController.custTenMore)
// 4. ID y nombre de los clientes que no aparecen en la tabla de ventas
// clientes que no han comprado productos OK
router.get('/customer/sincompras', customerController.noProducts)

/// / 5. ID y nombre de los clientes que han comprado
// todos los productos de la empresa OK
// router.get('/customer/allproducts', customerController.)
router.get('/customer/comprotodosproductos', customerController.buyAllProd)

// 6. ID y nombre de cada cliente y la suma total
// (suma de cantidad) de los productos que ha comprado. OK

router.get('/customer/sumatodosproductos', customerController.sumTotalCust)

module.exports = router
