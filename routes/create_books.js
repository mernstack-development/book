const express = require('express')

const router = express.Router();
const Book = require('../models/book');

//Modifying current date for publish date
const { format } = require('date-fns')
const curd = new Date();
const today = format(curd,'dd-MM-yyyy')

//Creating API for adding book
router.post('/addbook', async(req, res) => {

    //Handling error scnenario
    try{
        //Trying add data first
        const newBook = new Book({
            book_name:req.body.book_name,
            book_author:req.body.book_author,
            book_price:req.body.book_price,
            book_publish_date:today
        })
        const saveBook = await newBook.save();
        
        //Saving data into JSON format
        res.json(saveBook);
    }catch (error){
        //If facing error, will showing the error message in console
        console.log(error);
    }  
})

//Exporting router module
module.exports = router