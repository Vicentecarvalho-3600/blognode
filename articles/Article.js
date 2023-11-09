const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");


const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// belongsTo para repressentar um relacionamente entre 2 tabelas!


Category.hasMany(Article); // uma categoria tem muitos artigos.

Article.belongsTo(Category); // um artigo tem pertence a um categoria.



module.exports = Article;
