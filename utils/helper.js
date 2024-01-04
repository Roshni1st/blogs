const jwt = require('jsonwebtoken')

const { secretKeys } = require('../configurations/config')

/*
for enums 
*/
exports.enumValues = (enumObject,keyToMatch)=>{
    for ( const key in enumObject){
        if(key === keyToMatch){
            return enumObject[key]
        }
    }
    return null
}

/*
for generating jwt token
*/
exports.generateJWT = (obj)=> jwt.sign(obj,secretKeys.jwt)

/*
for converting 
*/
exports.toObject = (json)=> JSON.parse(JSON.stringify(json))