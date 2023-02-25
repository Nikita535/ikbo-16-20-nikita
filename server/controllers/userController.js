const bcrypt = require('bcrypt');
const {User} = require('../models')
const jwt = require('jsonwebtoken')

const generateJWT = (id,email,role) => {
    return jwt.sign({id, email,role}, 'secret_key',{
        expiresIn:'24h'
    });
}

class UserController{
    //1) create
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
    //2)get one
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
    //3) is auth
    async check(req,res){
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    //4) get all
    async getAll(req,res){
        const users = await User.findAll();
        return res.json(users);
    }
    // 5) delete
    async delete(req,res){
        const {email} = req.body;

        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"Не авторизован"});
        }
        const decode = jwt.verify(token,'secret_key');
        req.user = decode;

        console.log(email)
        console.log(decode.role)
        if(decode.role !== 'ADMIN'){
            return res.status(403).json({messageL:"Нет прав"})
        }
        User.destroy({where:{email:email}})
        return res.json({messageL:"Пользователь удалён"})
    }

    async update(req,res){
        const {id} = req.body;

        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"Не авторизован"});
        }
        const decode = jwt.verify(token,'secret_key');
        req.user = decode;

        if(decode.role !== 'ADMIN'){
            return res.status(403).json({messageL:"Нет прав"})
        }

        User.update(req.body,{where:{id:id}})
        return res.json({message:"Пользователь обновлён"});
    }
}

module.exports = new UserController();