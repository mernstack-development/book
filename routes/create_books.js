const express = require('express')
const router = express.Router();
const Book = require('../models/book');

//Modifying current date for publish date
const { format } = require('date-fns')
const curd = new Date();
const today = format(curd,'DD-MM-yyyy')

//Creating API for adding book
router.post('/addbook', async(req, res) => {

    //Handling error scnenario
    try{
        //Trying add data first
        const newBook = new Book({
            book_isbn:req.body.book_isbn,
            book_name:req.body.book_name,
            book_author:req.body.book_author,
            book_price:req.body.book_price,
            book_publish_date:today,
            book_binding:req.body.book_binding,
            book_edition:req.body.book_edition,
            book_genre:req.body.book_genre,
            book_subgenre:req.body.book_subgenre,
            book_publisher:req.body.book_publisher,
            book_readingage:req.body.book_readingage,
            book_countryOfOrigin:req.body.book_countryOfOrigin,
            book_height:req.body.book_height,
            book_width:req.body.book_width,
            book_weight:req.body.book_weight
        })
        const saveBook = await newBook.save();
        //Saving data into JSON format
        res.json(saveBook);
    }catch (error){
        //If facing error, will showing the error message in console
        console.log(error);
    }  
})


//Creating route for getting all data from database
router.get('/viewbook', async(req, res) => {
    try{
        //getting all data query
        const books = await Book.find();
        //sendind data into JSON format
        res.status(200).json(books)
    }catch (error){
        res.status(500).json( {"error":error} )
    }
})


//fetchiing books by id
router.get('/viewbook/:id', async(req, res) => {
    try{
        //getting all books by ID
        const books = await Book.findById(req.params.id)
        //sendind data into JSON format
        res.status(200).json(books)
    }catch (error){
        res.status(500).json( {"error":error} )
    }
})


//Updating data by ID
router.put('/updatebook/:id', async(req, res) => {
    try{
        //getting all books by ID
        const books = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true }
        )
        //sendind data into JSON format
        res.status(200).json(books)
    }catch (error){
        res.status(500).json( {"error":error} )
    }
})

//Deleting data from database
router.delete('/deletebook/:id', async(req, res) => {
    try{
        const books = await Book.findByIdAndDelete(req.params.id)
        //sendind data into JSON format
        res.status(200).json(books)
    }catch (error){
        console.log(error)
    }
})


//Exporting router module
module.exports = router