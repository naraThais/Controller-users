const db = require('./config/db');

module.exports = {
   async insert(req, res){
        let datas = {
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": req.body.senha
        }
        try{
            let response = await db.query('INSERT INTO usuario SET ?', [datas]);
            res.json(response);
        }catch(error){
            console.log(error);
        }
    }
}