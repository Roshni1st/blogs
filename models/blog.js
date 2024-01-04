const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const { BLOG_STATUS, USER_ROLES } = require('../utils/enums')

const blogSchema = mongoose.Schema({
  
        title : {
            type : String,
            require: true
         },
        description : {
            type : String,
            require: true
        },
        publish_date : {
            type : Date,
            require: true
        },
        modify_date : {
            type : Date,
            require: true
        },
        status : {
            type : String,
           require:true
          
        },
        category :{
            type : String,
            require : true
        },
        author:{
            type:String,
            require:true
        },
        user:{
            type : objectId,
            ref : 'user',
            default:null
        }

})


module.exports = mongoose.model('blog',blogSchema)