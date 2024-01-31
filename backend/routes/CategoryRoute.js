import express from 'express';
import { 
    createCategories, 
    deleteCategories, 
    getCategories, 
    getCategoriesbyId, 
    updateCategories } from '../controllers/CategoryController.js';


const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesbyId);
router.post('/categories', createCategories);
router.patch('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteCategories);

export default router;