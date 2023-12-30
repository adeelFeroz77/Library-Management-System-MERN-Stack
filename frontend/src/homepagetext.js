import React from "react";
import './App.css';
import image from './image.png'
import bookimg from './bookimg.png'
import { Button } from "antd";
const Texts = () =>{


    return(
        <div className="textdiv">
            {/* <h1 className='tagline'> Start Reading <br/><br/> Your <br/><br/> Favourite  <br/><br/>Book </h1> */}

<img className="image2" src={image} alt="image1"/>
<h4 className='quote'> There is no friend as loyal as a book.<label className="quote1">― Ernest Hemingway</label></h4>
<span className="span1"> <a href="http://localhost:3000/getbooks"> <Button  className="btn1"> View All Books</Button></a>
  </span>
 <img className="image3" src={bookimg} alt="image3"/>
    
        </div>
    )
}

export default Texts