import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Spin } from "antd";
import "./App.css";
// import { useParams } from "react-router-dom";
// import { param } from "../../src/routes/app";
// import Delete from './delete'
import useForceUpdate from './useForceUpdate'; // Import your useForceUpdate hook


const { Meta } = Card;
const Get = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [deleteData, setdeleteData]= useState()
  const forceUpdate = useForceUpdate(); // Use the hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/avaliblebooks");
        setData(response.data.Bookdetail);
        console.log("Data From Server!", response.data.Bookdetail);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const Delete_Data = async(id)=>{
    try {
      const response = await axios.delete(`/delete/${id}`);
      console.log(response.data);

      // Update the state to remove the deleted book
      setData((prevData) => prevData.filter((book) => book._id !== id));

      // Trigger a re-render
      forceUpdate();
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <div className="get_div1">
      {Array.isArray(data) && (
        <div className="card_div"
          style={{
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((books) => (
            <Card

              key={books._id}
              hoverable
              style={{ display: "flexbox", width: 280, margin: 14 , justifyContent: "space-evenly"}}
              cover={
                <img
                  style={{ width: "16rem" }}
                  alt={books.Name}
                  src={books.Image[1]}
                  onError={() =>
                    console.error("Error loading image:", books.Image[1])
                  }
                />

             
              }
              

            >

              {/* <Button> sdahjbghj</Button> */}
              <Meta
                title={books.Name + "  "}
                description={
                  "Author: " +
                  books.Author +
                  "        " +
                  books.Pages +
                  "    " +
                  "Category:     " +
                  books.Category +
                  "   " +
                  books.Year
                }
              />
              <Button className="delete_btn" type="primary" danger onClick={() => Delete_Data(books._id)}>Delete </Button>
            </Card>
          ))}
        </div>
      )}{" "}
    </div>
  );
};

{
  /* {loading && <Spin size="large" />}
    {Array.isArray(data) && (
      <div>
        {data.map((book) => (
       <Card
       key={book._id}
       hoverable
       style={{ width: 300, margin: 16 }}
       cover={
         <img
           alt={book.Name}
           src={book.url}
           onError={() => console.error('Error loading image:', book.url)}
         />
       }
     >
       <Meta title={book.Name} description={book.Author} />
     </Card>
        ))}
      </div>
    )}
  </div> */
}
{
  /* )

} */
}

export default Get;
