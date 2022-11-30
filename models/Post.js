const database = require('./database')

const Post = database.sequelize.define('postagens', {
    title: {
        type: database.Sequelize.STRING
    },
    content: {
        type: database.Sequelize.TEXT
    }

})
module.exports = Post
