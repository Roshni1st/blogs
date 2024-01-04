const passport = require('passport')
require('dotenv').config();
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { secretKeys } = require('../configurations/config')
const USER = require('../models/user')

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : secretKeys.jwt
}

const jwtauthStrategy = async(jwtPayload,done)=>{
    try{

        let user = await USER.findOne({_id:jwtPayload.user._id}).populate({path:'role',select:'name'})

        if(user){
            return done(null,user)
        }
        else{
            return done("Invalid access")
        }

    }catch(error){
      done(error)
    }
}

passport.use('authentication', new JWTStrategy(jwtOptions,jwtauthStrategy))