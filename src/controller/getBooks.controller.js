// const upload = require("../middleware.js/multer.middleware");
const Book = require("../models/liabrary.models");

const Get_books = async(req, res) => {
  try {
 
 
    const book = await Book.find();
 console.log(book.length);
//  console.log(book.Imageurl)
 const Bookdetail= book.map(book=>({
  _id: book._id,

  Name: book.Name,
  Author: book.Author,
  Image:[book.Image.public_id,book.Image.url ],
  // Image.: book.Image.public_id,
  // Image: book.Image.url,
  Pages: book.Pages,
  Year: book.Year,
  Category: book.Category
 }))   
 return(
      

    res.status(200).json({Bookdetail})
 

    // console.log(book.length)
    )
  } catch {
    console.log(Error);
    res.staus(500).send(Error);
  }

};


module.exports= Get_books