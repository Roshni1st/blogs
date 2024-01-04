const errorHandle = async (err,req,res,next)=>{
    const errStatus = err.StatusCode || 500

    let errMessage;
    
    if(err.details){
        if(err.details.body){
            errMessage = err.details.body[0].message
        }
       else if(err.details.params){
            errMessage = err.details.params[0].message
        }
        else if(err.details.query){
            errMessage = err.details.query[0].message
        }
    }
    
    res.send(errStatus).json({
        status : err.StatusCode,
        error : err.message
    })

}

module.exports = {
    errorHandle
}