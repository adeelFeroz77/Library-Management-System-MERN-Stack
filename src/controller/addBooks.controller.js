const Upload_on_Cloudinary = require("../cloudinary/Cloudinary");
const upload = require("../middleware.js/multer.middleware");
const Book = require("../models/liabrary.models");
const Avaliblity= require("../models/Avaliblity.model")
const Add_Book = async (req, res) => {
  try {
    console.log("req.file:", req.file); // Log req.file to see its content
    const UploadImg = await Upload_on_Cloudinary(req.file.path);

    if (!UploadImg) {
      return res.status(500).send({ message: "Cloudinary Upload Failed!" });
    }

    const book_detail = {
      Name: req.body.Name,
      Author: req.body.Author,
      Image: {
        public_id: UploadImg.public_id,
        url: UploadImg.url,
      },
      Pages: req.body.Pages,
      Year: req.body.Year,
      Category: req.body.Category,
      Avaliblity: req.body.Avaliblity

    };

    const result = await Book.create(book_detail);
    res.status(200).send(result);
    console.log(result);
  } catch (err) {
    console.log("There is Something wrong!", err);
    res.status(400).send(err);
  }
};


module.exports = Add_Book;
