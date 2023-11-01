# Pre Entrega 1 - Aplicación Express.js

## Descripción
Pre Entrega 1 es una aplicación web desarrollada con Express.js.

## Autor
**Autor:** Gabi Cuello

## Características Principales
- [Enumera aquí las características clave de tu aplicación.]

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pre-entrega-1.git
   ```
2. Ingresa al directorio:
   ```bash
   cd pre-entrega-1
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso
1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Abre tu navegador y visita:
   [http://localhost:3000](http://localhost:3000)

## API Endpoints

Este proyecto ofrece una API para gestionar productos y un carrito de compras. A continuación, se muestran ejemplos de cómo interactuar con la API utilizando solicitudes cURL.

### Obtener todos los productos
```bash
curl -X GET http://localhost:3000/api/products
```

### Obtener un producto por su ID (reemplaza :pid con el ID deseado)
```bash
curl -X GET http://localhost:3000/api/products/1
```

### Agregar un nuevo producto
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "nombre": "Nombre del Producto",
  "descripcion": "Descripción del Producto",
  "precio": 19.99
}' http://localhost:3000/api/products
```

### Actualizar un producto por su ID (reemplaza :pid con el ID deseado)
```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nombre": "Nuevo Nombre del Producto",
  "descripcion": "Nueva Descripción del Producto",
  "precio": 29.99
}' http://localhost:3000/api/products/1
```

### Eliminar un producto por su ID (reemplaza :pid con el ID deseado)
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

### Crear un nuevo carrito
```bash
curl -X POST http://localhost:3000/api/cart
```

### Obtener un carrito por su ID (reemplaza :cid con el ID del carrito)
```bash
curl -X GET http://localhost:3000/api/cart/1
```

### Agregar un producto a un carrito (reemplaza :cid y :pid con los IDs deseados)
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "quantity": 2
}' http://localhost:3000/api/cart/1/product/1
```