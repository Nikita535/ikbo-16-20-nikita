const bcrypt = require('bcrypt');
const {User} = require('../models')
const jwt = require('jsonwebtoken')

const generateJWT = (id,email,role) => {
    return jwt.sign({id, email,role}, 'secret_key',{
        expiresIn:'24h'
    });
}

class UserController{
    async registration(req,res){
        const {email,password,role} = req.body;
        console.log(req.body)
        if(!email || !password ){
            return res.json({message:'Введите почту и пароль'});
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return res.json({message:'Такой пользователь уже существует'});
        }

        const hashPassword = await bcrypt.hash(password,5);
        const user = await User.create({email,role,password:hashPassword})

        const token = generateJWT(user.id,user.email, user.role);
        return res.json({token})
    }
    async login(req,res){
        const {email,password} = req.body;
        const user = await User.findOne({where:{email}});
        if (!user){
            return res.json({message:'Такого пользователя не существует'});
        }
        let comparePassword = bcrypt.compareSync(password,user.password);
        if (!comparePassword){
            return res.json({message:'Введён неверный пароль'});
        }
        const token = generateJWT(user.id,user.email,user.role);
        return res.json({token});
    }
    async check(req,res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController();