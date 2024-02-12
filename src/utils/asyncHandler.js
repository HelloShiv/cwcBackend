const asyncHandler = (requestHandler) => {
    (req, res , next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export { asyncHandler }


// using try and catch

// const asyncHandler = (fn) =>  async  (err,req,res) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
