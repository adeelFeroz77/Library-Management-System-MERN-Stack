// router.get("/", async (req, res) => {
//     try {
//       const books = await Book.find();
//       res.json(books);
//       console.log(books);
//       console.log(books.length);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     }
//   });
  
//   router.post("/", async (req, res) => {
//     const bookDetails = {
//       Name: req.body.Name,
//       author: req.body.Writer,
//       Year: req.body.PublishedYear,
//       Category: req.body.Category,
//     };
//     try {
//       const result = await Book.create(bookDetails);
//       res.send(result);
//       console.log(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     }
//   });
  
//   router.get("/getcategory/:Category", async (req, res) => {
//     const Category = req.params.Category;
//     await Book.find({ Category: Category })
//       .then((category) => {
//         res.send(category);
//         console.log(category);
//       })
//       .catch((err) => {
//         console.log("Cannot Find this category", err);
//       });
//   });
  
//   router.get("/author/:author", async (req, res) => {
//     const author = req.params.author;
//     await Book.find({ author })
//       .then((author) => {
//         res.send([author]);
//         console.log("This book is Written by:", author);
//         console.log(author.length());
//       })
//       .catch((err) => {
//         console.log("Cannot get Author", err);
//         res.send(err);
//       });
//   });
  
//   router.get("/title/:title", async (req, res) => {
//     const title = req.params.title;
  
//     await Book.find({ title })
//       .then((title) => {
//         res.send([title]);
//         console.log([title]);
//       })
//       .catch((err) => {
//         res.send(err);
//         console.log(err);
//       });
//   });
  
//   router.post("/postimg", upload.single("Image"), async (req, res) => {
//     try {
//       const result = await Upload_on_Cloudinary(req.file.path);
  
//       if (!result) {
//         return res.status(500).send({ message: "Cannot Upload" });
//       }
  
//       res.status(200).send({ data: result, success: true, message: "Uploaded!" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ message: "Internal Server Error" });
//     }
//   });
  
  