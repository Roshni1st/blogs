const joi = require('joi')
const {BLOG_STATUS } = require('../utils/enums')

/*
Validations for post blogs
*/

exports.createBlog = {

    body : joi.object({
        title : joi.string().required().max(50),
        description : joi.string().required(),
        publish_date : joi.date().required(),
        modify_date : joi.date().required(),
        status : joi.string(),
        category : joi.string().required(),
        author : joi.string().required(),
        user : joi.string(),

    })
}

