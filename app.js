const express = require("express");
const app = express()
const morgan = require('morgan');
const layout = require('./views/layout')
app.use(morgan('dev'))
const { db, Page, User } = require('./models');
const routerUser = require('./routes/users')
const routerWiki = require('./routes/wiki')


app.use('/wiki', routerWiki)
app.use('/users', routerUser)


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/',(req, res, next) => {
    res.redirect("/wiki");
});


app.use(express.static('public'));
//express.urlencoded()
app.use(express.urlencoded({extended: false}));






const PORT = 1337 
const init = async () => {
    await db.sync({force:true});
    app.listen(PORT, () => {
      console.log(`Server is listning on port ${PORT}!`)
    })
  }
  
  init();


