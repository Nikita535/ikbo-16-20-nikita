const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"Не авторизован"});
        }
        const decode = jwt.verify(token,'secret_key');
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({message:"Не авторизован"});
    }
}