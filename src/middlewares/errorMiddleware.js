function  errorMiddleware(error,req,res,next) {
        return res.status(500).json({message:"Erro interno do servidor"})
}
module.exports = errorMiddleware