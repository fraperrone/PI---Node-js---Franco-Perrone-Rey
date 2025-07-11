// services/product.service.js
import Product from '../models/product.model.js';

export const getAllProducts = () => Product.findAll();
export const getProductById = (id) => Product.findById(id);
export const createProduct = (data) => new Product(data).save();
export const deleteProduct = (id) => Product.deleteById(id);