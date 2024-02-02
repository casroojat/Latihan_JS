import express from 'express';
import { 
    createPost, 
    deletePost, 
    getPost, 
    getPostById, 
    updatePost } from '../controllers/PostController.js';

const router = express.Router();

router.get('/post', getPost);
router.get('/post/:id', getPostById);
router.post('/post', createPost);
router.patch('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;