import React from "react";
import style from './component styles/MyProfile.module.css'
import homelogo from './../assets/Home.svg'

function MyProfile(props) {
 return (<div className= {style.container}>
            <header className={style.heading}>
                <h1>My Profile</h1>
                <a href="/"><img className= {style.HomeImage} src={homelogo} alt="homelogo" srcset="" /></a>
            </header>
        
 </div>
    
 )
}

export default MyProfile;