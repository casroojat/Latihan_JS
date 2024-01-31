import express from 'express';
import { 
    createProducts, 
    deleteProducts, 
    getProducts, 
    getProductsbyId, 
    updateProducts } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsbyId);
router.post('/products', createProducts);
router.patch('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

export default router;