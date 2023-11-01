const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;

const filePath = './products.json';
let products = [];

async function loadProducts() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    products = JSON.parse(data);
  } catch (err) {
    products = [];
  }
}

async function saveProducts() {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8');
}

function addProduct(productData) {
  const id = uuidv4();
  const product = { id, ...productData };
  products.push(product);
  saveProducts();
}

function getProducts() {
  return products;
}

function getProductById(id) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  return product;
}

function updateProduct(id, updatedFields) {
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    throw new Error('Producto no encontrado');
  }
  products[productIndex] = { ...products[productIndex], ...updatedFields };
  saveProducts();
}

function deleteProduct(id) {
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    throw new Error('Producto no encontrado');
  }
  products.splice(productIndex, 1);
  saveProducts();
}

module.exports = {
  loadProducts,
  saveProducts,
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
