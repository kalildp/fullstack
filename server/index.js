import  Express  from 'express'

const app = Express()
app.use(Express.json())

app.get('/pegar', function(req, res) {
    res.send('enviar esta mensagem')
})
app.get('/pegaroutracoisa', function(req, res) {
    res.send('esta é outra mensagem')
})

app.post('/registro', function(req,res){
    try{
        console.log(req.body)
        const {nome, sobrenome, email, senha, dataNascimento} = req.body
        if(!nome || !sobrenome || email ||senha ||dataNascimento){
        res.status(406).send('todos os campos devem ser enviados')
        return

        }console.log('criar user')
        res.status(201).send('ok')
    } catch (erro) {
        
    }
})

app.listen(8000)