import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import ProductRoutes from './routes/ProductRoutes.js'
import CategoryRoutes from './routes/CategoryRoute.js'
import PostRoutes from './routes/PostRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(ProductRoutes);
app.use(CategoryRoutes);
app.use(PostRoutes);
app.use(express.static("public"));


app.listen(process.env.APP_PORT, ()=>{
    console.log('App running on port 5000');
})