import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getProducts = async (req, res)=>{
    try {
        const response = await prisma.products.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getProductsbyId = async (req, res)=>{
    try {
        const response = await prisma.products.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}
export const createProducts = async (req, res)=>{
    const {product_name, product_price} = req.body
    try {
        const response = await prisma.products.create({
            data:{
                product_name : product_name,
                product_price : product_price
            }
        })
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const updateProducts = async (req, res)=>{
    const {product_name, product_price} = req.body
    try {
        const response = await prisma.products.update({
            where:{
                id: req.params.id
            },
            data:{
                product_name : product_name,
                product_price : product_price
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const deleteProducts = async (req, res)=>{
    try {
        const response = await prisma.products.delete({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
