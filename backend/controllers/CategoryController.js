import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getCategories = async (req, res)=>{
    try {
        const response = await prisma.category.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getCategoriesbyId = async (req, res)=>{
    try {
        const response = await prisma.category.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}
export const createCategories = async (req, res)=>{
    const {category_name, category_information} = req.body
    try {
        const response = await prisma.category.create({
            data:{
                category_name : category_name,
                category_information : category_information
            }
        })
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const updateCategories = async (req, res)=>{
    const {category_name, category_information} = req.body
    try {
        const response = await prisma.category.update({
            where:{
                id: req.params.id
            },
            data:{
                category_name : category_name,
                category_information : category_information
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const deleteCategories = async (req, res)=>{
    try {
        const response = await prisma.category.delete({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
