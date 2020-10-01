const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true,
        validate: {
            isEmail: true
        }
       }

   
})

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    slug: { //url safe version of page title
        type: Sequelize.STRING,
        allowNull: false
    }, 
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }, 
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        
    }
})
















module.exports = {
  db, User, Page
}