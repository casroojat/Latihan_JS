import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/ProductRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoutes)

app.listen(process.env.APP_PORT, ()=>{
    console.log('App running on port 5000');
})