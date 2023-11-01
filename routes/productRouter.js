var express = require('express');

const productRouter = express.Router();

const { getProducts, addProduct, updateProduct, deleteProduct, getProductById } = require('../ProductManager');

// Ruta para obtener todos los productos (GET /api/products)
productRouter.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);
  if (limit && limit < getProducts().length) {
    res.json(getProducts().slice(0, limit));
  } else {
    res.json(getProducts());
  }
});

// Ruta para obtener un producto por su ID (GET /api/products/:pid)
productRouter.get('/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = getProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Ruta para agregar un nuevo producto (POST /api/products)
productRouter.post('/', (req, res) => {
  const productData = req.body;
  try {
    const product = addProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para actualizar un producto por su ID (PUT /api/products/:pid)
productRouter.put('/:pid', (req, res) => {
  const productId = req.params.pid;
  const updatedFields = req.body;
  try {
    updateProduct(productId, updatedFields);
    res.status(200).json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Ruta para eliminar un producto por su ID (DELETE /api/products/:pid)
productRouter.delete('/:pid', (req, res) => {
  const productId = req.params.pid;
  try {
    deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = productRouter;