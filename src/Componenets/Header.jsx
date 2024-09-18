import React from "react";
import style from './Header.module.css';
import logo from './../assets/android-chrome-192x192.png'

function Header(props) {
    return (
        <div className={style.container}>
            <img id={style.image} src={logo} alt="myImage" />
            <img id={style.image} src={logo} alt="myImage" width={200} height={100}/>
            <h1 id={style.heading}>Food Booker</h1>
                <div className="buttoncontainer">
                <button id={style.buttonElement} type="button">DarkLight</button>
                <button id={style.buttonElement} type="button">Profile</button>
                </div>
        </div>
    );
}

export default Header;
