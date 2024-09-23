import { useState } from 'react'
import Header from './Componenets/Header'; // Import the Header component
import SecondHeader from './Componenets/secondheader';
import MainComponent from './Componenets/MainCompo'; // Import the Main content component
import Footer from './Componenets/FooterCompo'; // Import the Footer component
import './App.css'; // Import the CSS file to style the App layout

function App() {
  return (
    <div className="App"> 
      {/* This div wraps the entire app and applies global styles defined in App.css */}
      
      <div className="header">
        {/* This div wraps the Header component and gives it specific styles to control its height (30% of the page) */}
        <Header />
       
        
      </div>
      <div className='secondheader'>
      <SecondHeader/>
      </div>

      <div className="main">
        {/* This div wraps the MainComponent, where the content will be displayed.
            It is styled to grow and take up the remaining space between the header and footer */}
        <MainComponent />
      </div>

      <div className="footer">
        {/* This div wraps the Footer component and gives it a specific height (e.g., 10% of the page) */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

