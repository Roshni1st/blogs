const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const objectId = mongoose.Schema.Types.ObjectId

const userSchema = mongoose.Schema({
  
        first_name : {
            type : String,
            require: true
         },
        last_name : {
            type : String,
            require: true
        },
        email : {
            type : String,
            require: true
        },
        password : {
            type : String,
            require: true
        },
        dob : {
            type : Date,
            require: true
        },
        role :{
            type : objectId,
            ref : 'role'
        }

})

/*
Encrypt
Password
*/

userSchema.pre(
    'save',
    async function(next){
        let user = this
        const hash = await bcrypt.hash(this.password,10)
        this.password = hash
        next()
    }
)

/*
Compare
Password
*/

userSchema.methods.isValidPassword = async function(password){

    let user = this
    const compare = await bcrypt.compare(password,user.password)
    return compare
}

module.exports = mongoose.model('user',userSchema)