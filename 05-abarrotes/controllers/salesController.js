const ModelSales = require('../models/Sales')

const createSales = (req, res) => {
  ModelSales.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Sales created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating sales', error })
    })
}

const listAllSales = (req, res) => {
  ModelSales.findAllSales()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Customers', error })
    })
}
const listOneSales = (req, res) => {
  ModelSales.findAsale(req.params.SalesId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Sales', error })
    })
}

const updateOneSales = (req, res) => {
  ModelSales.updateSales(req.params.SalesId, req.body)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error updating Sales', error })
    })
}

const destroyOneSales = (req, res) => {
  ModelSales.destroySales(req.params.SalesId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying Sales', error })
    })
}

const softDeleteOneSales = (req, res) => {
  ModelSales.softDelete(req.params.SalesId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying Sales', error })
    })
}
const cityAllProdSold = (req, res) => {
  ModelSales.AllProdNameCity()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send({ message: 'Error listing city where all products had sold', error })
    })
}

module.exports = {
  createSales,
  listAllSales,
  listOneSales,
  updateOneSales,
  destroyOneSales,
  softDeleteOneSales,
  cityAllProdSold
}
