import React from "react";
import { useState } from "react";
import style from './Header.module.css'

function Header(props){
    return <div className= {style.container}> 
        <h1 id={style.heading}>Food Booker</h1>
    </div>
}

export default Header;