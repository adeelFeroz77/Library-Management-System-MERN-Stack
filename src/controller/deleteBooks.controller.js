// const UserDetails= require('../models/User.models')
const Book = require("../models/liabrary.models");

const deleteBooks = async (req, res) => {
    try {
      const {id} = req.params;
      // const userName = req.body.userName;
      // const userEmail = req.body.userEmail;
  
      // Find the book to delete
      const bookToDelete = await Book.findById(id);
  
      if (!bookToDelete) {
        return res.status(404).json({ msg: "Cannot find the book to delete." });
      }
  
      // Delete the book
      await Book.findByIdAndDelete(id);
  
      res.status(200).json({
        msg: "The Book is deleted",
        deletedBook: bookToDelete,
      });
    } catch (error) {
      console.log('Error during book deletion:', error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  };
module.exports= deleteBooks