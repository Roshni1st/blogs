const ROLE = require('../models/role')
const USER = require('../models/user')
const { enumValues, generateJWT, toObject } = require('../utils/helper')
const { USER_ROLES } = require('../utils/enums')

/**
 * User Registration 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.signup = async (req,res,next)=>{
    try{
        let error
         const userPayload = req.body
         const { role } = userPayload

         const roleValues = enumValues(USER_ROLES,role)
         const roleFound = await ROLE.findOne({name : roleValues})
         if(!roleFound){
            errStatus = error.status
            error = error.message
            throw new Error(error)
         }

         userPayload.role = roleFound._id

         const user = await USER.create(userPayload)
         res.status(200).json({user,message:"Registration Done"})


    }catch(error){
        next(error)
    }
}

/**
 * Login 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.login = async (req,res,next)=>{
    try{

        const { email , password } = req.body

        let user = await USER.findOne({email:email}).populate({path:'role',select:'name'})
        let validate = await user.isValidPassword(password)
        if(!validate){
               res.status(400).json({message:"Wrong Password"})
             }

        const body = { _id : user._id,email:user.email}
        const token = generateJWT({user:body})
        user = toObject(user)
        user.token = "Bearer "+token

        res.status(200).json({user,message:"Logged In Successfully!!!"})

    }catch(error){
     next(error)
    }
}