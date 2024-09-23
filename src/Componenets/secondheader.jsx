import React from "react";
import style from './Header.module.css';
import logo from './../assets/finalmyheadin.png'
import AppLogo from './../assets/resizedlogo.png'
import myimage from './../assets/resizedMyimage.png'
import HomeLogo from './../assets/HomepageLogo.png'

function SecondHeader(props) {
    return (
        <div className={style.container} >
            <section className= {style.Appheading}>
            <img src= {HomeLogo} alt="" srcset="" />
            <nav>
                <ul>
                   <li><a href="">Go to Shops</a></li> 
                    <li><a href="">My Favourites</a></li>
                    <li><a href="">My Cart</a></li>
                   <li><a href="">My Profie</a></li> 
                   <li><a href="">Instagram</a></li>
                    <li><a href="">Feedback</a></li>
                </ul>
                
                    
                
            </nav>
          </section>
        </div>
    );
    
}

export default SecondHeader;