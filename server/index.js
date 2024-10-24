import  Express  from 'express'
import {User, criarTabelas} from './db.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app = Express()
app.use(Express.json())

app.get('/pegar', function(req, res) {
    res.send('enviar esta mensagem')
})
app.get('/pegaroutracoisa', function(req, res) {
    res.send('esta é outra mensagem')
})
//criarTabelas()
app.post('/registro', async function(req,res){
    try{
        console.log(req.body)
        const {nome, sobrenome, email, senha, dataNascimento} = req.body

        if(!nome || !sobrenome || !email || !senha || !dataNascimento){
            res.status(406).send('todos os campos devem ser enviados')
            return
        }
        if(await User.findOne({where:{email:email}})){
            res.status(400).send('usuario ja existe')
            return
        }
        const senhaSegura = bcryptjs.hashSync(senha, 10)
        const novoUsuario = User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senhaSegura,
            dataNascimento: dataNascimento
        })
        res.status(201).send('ok')
    } catch (erro) {
        
    }
})

app.post('/login', async function(req,res) {
    try{
       const { email, senha} = req.body
    if (!email || !senha) {
        res.status(400).send("todos os campos devem ser preencidos")
        return
    } 
    const usuario = await User.findOne({where:{email:email}})
    if (!usuario) {
        res.send('este email nao esta cadastrado')
        return
    }
    const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
    if (!senhaCorreta) {
        res.send('este senha nao esta correta')
        return
    }
    const token =jwt.sign(
        {
            nome:usuario.nome,
            email:usuario.email,
            status:usuario.status
        },
        'chavecriptografiasupersegura',
        {expiresIn: 1000*60+60*24*30}
    )
    res.send({msg:'voce foi logado', token: token})

}
    catch (erro){
        console.log(erro)
        res.status(500).send("houve um problema")
    }
    
})

app.listen(8000)