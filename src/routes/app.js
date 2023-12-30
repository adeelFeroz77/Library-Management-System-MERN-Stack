const express = require("express");
const router = express.Router();
const Book = require("../models/liabrary.models");
const upload = require("../middleware.js/multer.middleware");
// const cloudinarys = require("../cloudinary/Cloudinary");
const Img = require("../models/Image.model");
// const Upload_on_Cloudinary = require("../cloudinary/Cloudinary");
// const GettingBook= require('./book')
const Get_books= require('../controller/getBooks.controller')
const Add_Book= require ('../controller/addBooks.controller')
const UserDetails= require('../models/User.models')
const deleteBooks= require('../controller/deleteBooks.controller')
const GetoneBook= require('../controller/getonebook.controller')

router.get('/avaliblebooks', Get_books)
router.post('/postbook',upload.single("image"),Add_Book)
router.delete('/delete/:id', deleteBooks )
router.get('/:id', GetoneBook)


module.exports = router;
