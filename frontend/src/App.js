// import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import Headbar from './header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Get from './getbooks'
import logo from './logo.png'
import {Layout, Space} from 'antd'
// import library from './library.png'
import Texts from './homepagetext'
// import Post from './post'
// import Post from './Post'
import Post from './post'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {Header, Footer , Sider, Content } = Layout

function App() {
// const getdata=async ()=>{
// try{
// const Response= await axios.get('/avaliblebooks');
// console.log(Response.data)
// }
// catch(error){
//   console.error('Error fetching data:', error);

// }
// }
  return (
    <div className='maindiv'>
    <BrowserRouter>

    <div className="responsive-container">
  <Header className='header_Style'>
<div className='nav_div'>   <div  className='a1'> <a href='/'><img  className="img1" src={logo} alt="Logo"></img></a></div>
   <div  className='a2'> <a href='/'><h3 className='lms'>Library Management System </h3> </a> </div>
    <nav className='nav1'>
      <Link className='nav2' to="/getbooks"> All Books</Link>
      <Link className='nav3' to="/postbook"> Post</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Texts />} />
      <Route path="/getbooks" element={<Get />} />
      <Route path="/postbook" element={<Post />} />
    </Routes></div>
  </Header>
</div>

</BrowserRouter>
{/* <img className='img1' src={library} alt='libraryimg'/> */}

</div>
)
}

export default App;

   {/* <button style={{width:"12rem", height:"2rem", backgroundColor:"lightcoral"}} onClick={getdata}> Get Book Data</button>
    */}
