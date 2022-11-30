const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post')




//Config
//Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Rotas
app.get('/', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
        res.render('home', { posts: posts })
    })
})
app.get('/card', function (req, res) {
    res.render('layouts/form')
})
app.post('/add', function (req, res) {
    Post.create({
        title: req.body.title,
        content: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (err) {
        res.send('houve um erro:' + err)
    })
})
app.get('/delete/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Postagem excluida com sucesso")
    }).catch(function (err) {
        res.send("Está postagem não existe")
    })
})
app.listen(8081, function () {
    console.log('Projeto rodando..')
})