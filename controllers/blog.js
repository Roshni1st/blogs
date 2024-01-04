const USER = require('../models/user')
const BLOG = require('../models/blog')

/**
 * Shows blogs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

/**
 * Shows all blogs for admin
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.showAll = async(req,res,next)=>{
    try{
      const blogs = await BLOG.find()
      res.status(200).json({blogs})
      
    }catch(error){
        next(error)
    }
}
/**
 * show user wise blogs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.showByUSer = async(req,res,next)=>{
    try{
        const id = req.params.id
        const blog = await BLOG.findOne({id})
        res.status(200).json(blog)

    }catch(error){
        next(error)
    }
}

/**
 * Blog creations
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.storeBlog = async(req,res,next)=>{
    try{
     
      const blogPayload = req.body
      const { user } = blogPayload
      blogPayload.user = req.user._id
      const blog = await BLOG.create(blogPayload)
      res.status(200).json({blog,message:"Blog created"})

    }
    catch(error){
      next(error)
    }
}

/**
 * delete blog
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.removeBlog = async(req,res,next)=>{
    try{
        const id = req.params.id
        const blog = await BLOG.findByIdAndDelete(id)
        res.status(200).json({message:"Blog removed"})

    }catch(error){
        next(error)
    }
}

/**
 * update  blogs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.editBlog = async(req,res,next)=>{
    try{
        const id = req.params.id
        const payload = req.body
        const blog = await BLOG.findOneAndUpdate({id,payload,new:true})
        res.status(200).json({blog,message:"Blog Updated"})

    }catch(error){
        next(error)
    }
}