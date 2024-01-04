const passport = require('passport')
require('../middlewares/passport')
const handleJWT = (req,res,next,roles) => (err,user,info)=>{

    try{
        if(roles !== undefined){       
            roles = typeof roles === 'string' ? [roles]:roles 

            if(!roles.includes(user.role.name)){
                throw new Error("Permission denied")

            }
            req.user = user
            return next()
        }
       
    }catch(error){
        next(error)
    }

}


exports.isAuth = (roles) => (req,res,next)=>{
    passport.authenticate('authentication',{session:false},handleJWT(req,res,next,roles))(req,res,next)
}