const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    book_isbn:{
        type:Number,
        required:true
    },
    book_name:{
        type:String,
        required: true
    },
    book_author:{
        type:String,
        required: true
    },
    book_price:{
        type:Number,
        required: true,
    },
    book_publish_date:{
        type:Date,
        required: true,
    },
    book_status:{
        type:String,
        enum:['enable','disable'],
        default: 'enable',
    },
    book_binding:{
        type:String,
        required: true
    },
    book_edition:{
        type:String,
        required: true
    },
    book_genre:{
        type:String,
        required: true
    },
    book_subgenre:{
        type:String,
        required: true
    },
    book_publisher:{
        type:String,
        required: true
    },
    book_readingage:{
        type:Number,
        required: true
    },
    book_countryOfOrigin:{
        type:String,
        required: true
    },
    book_returnable:{
        type:String,
        enum:['Y','N'],
        default: 'N',
    },
    book_height:{
        type:String,
        required: true
    },
    book_width:{
        type:String,
        required: true
    },
    book_weight:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('books',bookSchema)