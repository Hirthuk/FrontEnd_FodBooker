import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import Header from './Componenets/Header'; // Import the Header component
import SecondHeader from './Componenets/secondheader';
import MainComponent from './Componenets/MainCompo'; // Import the Main content component
import Footer from './Componenets/FooterCompo'; // Import the Footer component
import './App.css'; // Import the CSS file to style the App layout
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyFavourites from './Componenets/MyFavourites';
import MyCart from './Componenets/MyCart';
import MyProfile from './Componenets/MyProfile';
import Updatedetails from './Componenets/Updateinput';


function App() {
  const myRef = useRef(null);
  const footerRef = useRef(null);
  const [ishighlighted, setHighlited] = useState(false);
  const [UserDetail, setusername] = useState("user");

  function ScrollFunction() {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function ScrollToFooter() {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
    setHighlited(true);

    setTimeout(() => {
      setHighlited(false);
    }, 2000);
  }

  async function getDetails() {
    try {
      const response = await axios.get("http://localhost:3000/UsernameDetails");
      const firstname = response.data.firstName;
      console.log(firstname); // Log the fetched firstname
      setusername(firstname);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  
    async function getDetails() {
      try {
        const response = await axios.get("http://localhost:3000/UsernameDetails", {
          withCredentials: true,  // Make sure cookies are included in the request
        });
        const firstname = response.data.firstName;
        console.log(firstname); // Log the fetched firstname
        setusername(firstname);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
  
   
    
  useEffect(() => {
    getDetails(); // Call the async function

  },[])
  


  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element= {
          <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className='secondheader'>
        <SecondHeader 
          scroll={ScrollFunction} 
          footerScroll={ScrollToFooter}
        />
      </div>
      

      <div className="main" ref={myRef}>
        <MainComponent 
          username={UserDetail}
        />
      </div>

      <div className="footer" ref={footerRef}>
        <Footer  
          footerHighlighTorF={ishighlighted}
        />
      </div>
    </div>
        }
        
        />
        <Route
        path='/favourites'
        element = {
          <div>
           
            <MyFavourites/>
            <Footer/>

          </div>
        }
        />
        <Route
        path='/MyCart'
        element = {
          <div> 
          
           <MyCart/>
           <Footer/>
          
          </div>
        }
        />
        <Route
        path='/MyProfile'
        element = {
          <div className= "Profile">
            <MyProfile/>
            <Footer/>
          </div>
        }
        />
        <Route
        path = '/Updatedetails'
        element = {
          <div className='Details'>
            <Updatedetails/>
          </div>
        }
        />
      </Routes>
    
    </Router>
  );
}

export default App;
