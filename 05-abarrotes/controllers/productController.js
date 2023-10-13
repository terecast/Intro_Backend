const ModelProduct = require('../models/Product')

const createProduct = (req, res) => {
  ModelProduct.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Product created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating Product', error })
    })
}

const listAllProducts = (req, res) => {
  ModelProduct.findAllProducts()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Products', error })
    })
}
const listOneProduct = (req, res) => {
  ModelProduct.findOneProduct(req.params.ProductId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Product', error })
    })
}

const updateOneProduct = (req, res) => {
  ModelProduct.updateProduct(req.params.ProductId, req.body)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error updating Product', error })
    })
}

const destroyOneProduct = (req, res) => {
  ModelProduct.destroyProduct(req.params.ProductId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying Product', error })
    })
}

const softDeleteOneProduct = (req, res) => {
  ModelProduct.softDelete(req.params.ProductId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying product', error })
    })
}
// Querys Mini proyecto//

// 2.- ID y descripcion de los productos que cuesten menos de 15 pesos
const prodLess15 = (req, res) => {
  ModelProduct.prodlow15Mxp()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing products less than 15 MXP', error })
    })
}
// 7. ID de los productos que no han sido comprados por clientes de Guadalajara.
const nonGdlSold = (req, res) => {
  ModelProduct.gdlNonSold()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      console.log((error))
      res.status(400).send({ message: 'Error listing products Not sold in GDL', error })
    })
}

// 8. ID de los productos que se han vendido a clientes
// de Monterrey y que también se han vendido a clientes de Cancún.
const soldMtyCun = (req, res) => {
  ModelProduct.ProdMtyCun()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing products sold in MTY and CUN', error })
    })
}

module.exports = {
  createProduct,
  listAllProducts,
  listOneProduct,
  updateOneProduct,
  destroyOneProduct,
  softDeleteOneProduct,
  prodLess15,
  nonGdlSold,
  soldMtyCun
}
