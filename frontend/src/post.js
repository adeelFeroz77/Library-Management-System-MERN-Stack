import './App.css';
import axios from "axios";
import React, { useState } from "react";
import { Button } from 'antd';
// import "./App.css";

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

const Post = () => {
  const [Name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [image, setimage] = useState(null);
  const [Category, setCategory] = useState("");
  const [Pages, setPages] = useState("");
  const [Year, setYear] = useState("");

  const handleImageChange = (e) => {
    setimage(e.target.files);
    console.log(e.target.files);

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("Name", Name);
      formData.append("Author", Author);
      formData.append("Category", Category);
      formData.append("Pages", Pages);
      formData.append("Year", Year);
      formData.append("image", image[0]);

      const response = await axios.post("/postbook", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Full Response:", response);

      if (response.data) {
        console.log("Data we Got:", response.data);

        // Access URL and public ID from the response
        const imageUrl = response.data.imageUrl;
        const publicId = response.data.publicId;

        // Use imageUrl and publicId as needed
        console.log("Image URL:", imageUrl);
        console.log("Public ID:", publicId);
        alert("The Book is Created!")
      
      }   if(formData ===  ""){
        alert("All Fields must be Filed!")
      }
      else {
        console.log("Response Data is empty.");
      }
    } catch (error) {
      console.error("Error Posting Data", error);
    }
  };

  return (
    <div  className="postdiv-container"
    // style={{marginLeft:'40rem', width:'30rem', marginTop:'5rem', display:'flexbox'}}
     >
      <table className="postdiv">
      <label>Name</label>
      <input className="inputbox" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
      <br />

      <label>Author</label>
      <input className="inputbox"  type="text" value={Author} onChange={(e) => setAuthor(e.target.value)} />
      <br />

      <label>Image</label>
      <input className="inputbox1"   type="file" onChange={handleImageChange} accept="image/*" />
      <br />

      <label>Category</label>
      <input className="inputbox"  type="text" value={Category} onChange={(e) => setCategory(e.target.value)} />
      <br />

      <label>Pages</label>
      <input className="inputbox"  type="number" value={Pages} onChange={(e) => setPages(e.target.value)} />
      <br />

      <label>Year</label>
      <input className="inputbox"  type="text" value={Year} onChange={(e) => setYear(e.target.value)} />
      <br />

      <Button size="large" primary onClick={handleSubmit} type="primary">Submit</Button>
      </table>
    </div>
  );
};

export default Post;
 