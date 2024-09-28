import React from "react";
import style from './component styles/Header.module.css'
import logo from './../assets/finalmyheadin.png'
import AppLogo from './../assets/resizedlogo.png'
import myimage from './../assets/resizedMyimage.png'
import HomeLogo from './../assets/HomepageLogo.png'

function Header(props) {
    return (
        <div className={style.container}>
          <section className={style.myheading}>
            <img className = {style.firstimage}src={logo}/>
            <img className = {style.myImage} src={AppLogo} alt=""/>
          </section>
          
        </div>
    );
}

export default Header;
