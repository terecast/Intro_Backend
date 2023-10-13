// Los controladores tienen la logica del negocio

const ModelCustomer = require('../models/Customer')

const createCustomer = (req, res) => {
  ModelCustomer.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Customer created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating customer', error })
    })
}

const listAllCustomers = (req, res) => {
  ModelCustomer.findAllCustomers()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customers', error })
    })
}

const listOneCustomer = (req, res) => {
  ModelCustomer.findOneCustomer(req.params.customerId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customer', error })
    })
}

const updateOneCustomer = (req, res) => {
  ModelCustomer.updateCustomer(req.params.customerId, req.body)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error updating customer', error })
    })
}

const destroyOneCustomer = (req, res) => {
  ModelCustomer.destroyCustomer(req.params.customerId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying customer', error })
    })
}

const softDeleteOneCustomer = (req, res) => {
  ModelCustomer.softDelete(req.params.customerId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying customer', error })
    })
}
// Mini Proyecto//

// 1. ID de los clientes de la Ciudad de Monterrey
const customerFromMty = (req, res) => {
  ModelCustomer.MonterreyCustomerId()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customer from Monterrey', error })
    })
}

// 3. ID y nombre de los clientes, cantidad vendida, y descripción del producto,
// en las ventas en las cuales se vendieron más de 10 unidades.
const custTenMore = (req, res) => {
  ModelCustomer.ejercicioTres()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customer ID of sales more than 10 items', error })
    })
}
// 4. ID y nombre de los clientes que no aparecen en la tabla de ventas
// clientes que no han comprado productos
const noProducts = (req, res) => {
  ModelCustomer.nonBuy()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customer without purchases', error })
    })
}

/// / 5. ID y nombre de los clientes que han comprado
// todos los productos de la empresa
const buyAllProd = (req, res) => {
  ModelCustomer.buyAllProducts()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send({ message: 'Error listing Customers that bought all products', error })
    })
}
// 6. ID y nombre de cada cliente y la suma total
// (suma de cantidad) de los productos que ha comprado. OK
const sumTotalCust = (req, res) => {
  ModelCustomer.sumaBuyCust()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      console.log((error))
      res.status(400).send({ message: 'Error listing products Not sold in GDL', error })
    })
}

module.exports = {
  createCustomer,
  listAllCustomers,
  listOneCustomer,
  updateOneCustomer,
  softDeleteOneCustomer,
  destroyOneCustomer,
  customerFromMty,
  custTenMore,
  noProducts,
  buyAllProd,
  sumTotalCust

}
