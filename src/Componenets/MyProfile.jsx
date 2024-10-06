import React from "react";
import style from './component styles/MyProfile.module.css';
import homelogo from './../assets/Home.svg';
import profileImage from './../assets/User.svg'; // Add your profile image path here
import { useState } from "react";

function MyProfile(props) {

    const [firstname, setFirstName] = useState("User");
    const [lastname, setLastName] = useState("User");
    const [contactNumber, setContact] = useState("Number not updated");
    const [email, setEmail] = useState("")

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
                    <h2>Name: {props.username}</h2>
                    <h2>Lastname: {props.OtherDetails.lastname}</h2>
                    <h2>Email: {props.OtherDetails.email}</h2>
                    {/* if number is null(which means false) saying number updated. if true returning that value itself*/}
                    <h2>Contact Info: {props.OtherDetails.ContactInfo? props.OtherDetails.ContactInfo: "Number needs to be updated"}</h2>
                 <a href="/Updatedetails" target="_blank"><button type="submit">Update</button></a>   
                </section>
            </main>
        </div>
    );
}

export default MyProfile;
