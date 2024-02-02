import {PrismaClient} from '@prisma/client';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

export const getPost = async (req, res)=>{
   try {
        const response = await prisma.post.findMany();
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message})
   }
}
export const getPostById = async (req, res)=>{
    try {
        const response = await prisma.post.findUnique({
            where:{
                id: req.params.id
            }
        });
        if(!response) return res.status(404).json({msg: "Data not found"});
        res.status(200).json(response);
   } catch (error) {
        res.status(404).json({msg: error.message})
   }
}
export const createPost = async (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No file uploaded"});
    const title = req.body.title;
    const category = req.body.category;
    const content = req.body.content;
    const image = req.files.image;
    const imageSize = image.data.length;
    const ext = path.extname(image.name);
    const imageName = image.md5 + ext;
    const url_image = `${req.protocol}://${req.get("host")}/images/post/${imageName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid image type"});
    if(imageSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 Mb"});

    image.mv(`./public/images/post/${imageName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await prisma.post.create({
                data:{
                    title: title,
                    category: category,
                    content: content,
                    image: imageName,
                    url_image: url_image
                }
            });
            res.status(201).json({msg: "Post created succesfuly"})
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    });
}


export const updatePost = async (req, res)=>{
    const selectedPost = await prisma.post.findUnique({
        where:{
            id: req.params.id
        }
    });
    if(!selectedPost) return res.status(404).json({msg: "Data not found"});
    let imageName = "";
    if(req.files === null){
        imageName = selectedPost.image
    }else{
        const image = req.files.image;
        const imageSize = image.data.length;
        const ext = path.extname(image.name);
        imageName = image.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid image type"});
        if(imageSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 Mb"});

        const filePath = `./public/images/post/${selectedPost.image}`;
        fs.unlinkSync(filePath);

        image.mv(`./public/images/post/${imageName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const title = req.body.title;
    const category = req.body.category;
    const content = req.body.content;
    const url_image = `${req.protocol}://${req.get("host")}/images/post/${imageName}`;
    
    try {
        await prisma.post.update({
            where: {
                id: req.params.id
            },
            data:{
                title: title,
                category: category,
                content: content,
                image: imageName,
                url_image: url_image
            }
        });
        res.status(200).json({msg: "Post updated succesfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const deletePost = async (req, res)=>{
    const selectedPost = await prisma.post.findUnique({
        where:{
            id: req.params.id
        }
    });
    if(!selectedPost) return res.status(404).json({msg: "Data not found"});
    try {
        const filePath = `./public/images/post/${selectedPost.image}`;
        fs.unlinkSync(filePath);
        await prisma.post.delete({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: 'Post deleted succesfuly'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}