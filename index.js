const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// Controllers
const categoriesController = require('./categories/CategoriesController');
const ArticlesController = require('./articles/ArticlesController');

// models
const articleModel = require('./articles/Article');
const categoryModel = require('./categories/Category');

// view engine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    })


app.use('/', categoriesController);
app.use('/', ArticlesController);

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3333,()=> {
    console.log("servidor online");
})