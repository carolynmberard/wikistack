const express = require('express')
const router = express.Router();
const {addPage} = require('../views')//double dot is important
const { Page } = require("../models");



router.use(express.urlencoded({extended: false}));



router.get('/', (req,res,next)=> {
    console.log('hello world')
  })
  

router.post('/', async (req, res, next) => {

    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
  
    try {
       // console.log(req.body)
      const page = await Page.create({
         
        title: res.json(req.body.name), 
        content: res.json(req.body.content)
      });
  
      // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
      res.redirect('/');
    } catch (error) { next(error) }
  });



router.get('/add',(req, res, next) => {
 res.send(addPage())
 //call it as a function!!!!!
})






module.exports = router

