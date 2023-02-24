const jwt = require('jsonwebtoken');

module.exports = function(role){
    return function(res,req,next){
        try {
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                return res.status(401).json({message:"Не авторизован"});
            }
            const decode = jwt.verify(token,'secret_key');
            if(decode.role !== role){
                return res.status(403).json({message:"Нет"})
            }
            req.user = decode;
            next();
        } catch (error) {
            // res.status(401).json({message:"Не авторизован"});
        }
    }
}