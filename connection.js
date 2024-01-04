const mongoose = require('mongoose')
require('dotenv').config()
const { dbUrl } = require('./configurations/config')


/*
setting up connection
*/

const connect = async ()=>{
    try{

        const connection = await mongoose.connect(dbUrl)
        if(connection) console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting to database",error);
    }

}

module.exports = {
    connect
}