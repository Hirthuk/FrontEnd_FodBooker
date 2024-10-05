import React from "react";
import style from './component styles/MyProfile.module.css';
import homelogo from './../assets/Home.svg';
import profileImage from './../assets/User.svg'; // Add your profile image path here

function MyProfile(props) {
    return (
        <div className={style.container}>
            <header className={style.heading}>
                <h1>My Profile</h1>
                <a href="/">
                    <img className={style.HomeImage} src={homelogo} alt="homelogo" />
                </a>
            </header>
            <main>
                {/* Profile Image */}
                <img src={profileImage} alt="Profile" />

                {/* User Details */}
                <section>
                    <h2>Name: Sharankumar P</h2>
                    <h2>Lastname: Pandiyarajan</h2>
                    <h2>Email: sharankumarpo2@gmail.com</h2>
                    <h2>Contact Info: 6385642886</h2>
                 <a href="/Updatedetails"><button type="submit">Update</button></a>   
                </section>
            </main>
        </div>
    );
}

export default MyProfile;
