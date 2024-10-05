import React from "react";
import style from './component styles/second.module.css'
import logo from './../assets/finalmyheadin.png'
import AppLogo from './../assets/resizedlogo.png'
import myimage from './../assets/resizedMyimage.png'
import HomeLogo from './../assets/HomepageLogo.png'

function SecondHeader(props) {
    return (
        <div className={style.container} >
            <section className= {style.Appheading}>
           
            <nav>
                <ul>
                   <li><a onClick={props.scroll}>Go to Shops</a></li> 
                    <li><a href="/favourites">My Favourites</a></li>
                    <li><a href="/MyCart">My Cart</a></li>
                   <li><a href="/MyProfile">My Profie</a></li> 
                   <li><a  onClick={props.footerScroll}>Instagram</a></li>
                    <li><a onClick={props.footerScroll} >Feedback</a></li>
                </ul>
                
                    
                
            </nav>
          </section>
        </div>
    );
    
}

export default SecondHeader;