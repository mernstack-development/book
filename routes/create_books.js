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