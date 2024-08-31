import React from "react";
import style from './Header.module.css';

function Header(props) {
    return (
        <div className={style.container}>
            <img id={style.image} src="" alt="myImage" />
            <h1 id={style.heading}>Food Booker</h1>
            
                <button id={style.buttonElement} type="button">DarkLight</button>
                <button id={style.buttonElement} type="button">Profile</button>
            
        </div>
    );
}

export default Header;
