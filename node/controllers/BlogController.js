//importamos el Modelo
import { json } from "sequelize";
import blogModel from "../models/blogModel.js";
//**Método para CRUD */

//Mostrar todos los blogs
export const getAllBlogs= async(req,res)=>{
    try{
        
        const blogs = await blogModel.find()
        res.status(200).json(blogs)
     } catch (error){ 
        res.json({ message: error.message})
    }
}
//Mostrar un blog
export const getBlog = async (req, res) => {
        try {
            const id = req.params.id
            await blogModel.findById( {_id:id} ).then( (blog) => {
                res.status(200).json(blog)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un blog
export const createBlog = async (req, res) =>{
    try{
       await blogModel.create(req.body)
       res.status(200).json({
        "message":"¡Registro creado correctamente!"
       })
    } catch (error){
        res.json({ message: error.message})

    }
}
// Actualizar un blog
export const updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        await blogModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡blog actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un blog
export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await blogModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡blog eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}