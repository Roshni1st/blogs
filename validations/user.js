const joi = require('joi')
const { USER_ROLES } = require('../utils/enums')

/*
Validations for signup
*/

exports.signup = {

    body : joi.object({
        first_name : joi.string().required().max(20).min(3),
        last_name : joi.string().required().max(20).min(3),
        email : joi.string().required().email(),
        password : joi.string().required().max(20).min(8),
        dob : joi.date().required(),
        role : joi.string().valid(...Object.values(USER_ROLES))
    })
}

/*
Validations for login
*/

exports.login = {

    body : joi.object({
        email : joi.string().required().email(),
        password : joi.string().required().max(20).min(8),
    })
}