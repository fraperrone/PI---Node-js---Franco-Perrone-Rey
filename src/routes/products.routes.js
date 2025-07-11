//definimos las rutas


import express from 'express';


//definimos el router
const router = express.Router();
//importamos el controlador
import * as productController from '../controllers/products.controller.js';
//definimos las rutas
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products/create', productController.createProduct);
router.delete('/products/:id', productController.deleteProduct);

//exportamos el router
export default router;