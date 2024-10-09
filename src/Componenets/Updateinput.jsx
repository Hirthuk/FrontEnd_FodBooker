import React from "react";
import style from './component styles/updatedetails.module.css';
import axios from 'axios';

const Updatedetails = (props) => {
    const handleInput = async (event) => {
        event.preventDefault();

        // Ensure the form field names are consistent with backend expectations
        const getDetails = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            contact: event.target.contact.value,
            email: event.target.email.value, // Changed from "Email" to "email"
        };

        try {
            // Send the details to the backend with await
            const response = await axios.post("http://localhost:3000/receiveUserDetails", getDetails, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // This became more important. while communication between server
                // using axios we want to share the session we have set this. from backend we recevied the session to front end
                // Now giving back to frontend to authenitcate user using session in this endpoint
            });

            console.log("Response:", response.data);

            // Show an alert and redirect after the data is successfully sent
            // console.log(getDetails.firstname);
            // alert("Your details will be updated");
            setTimeout(async () => {
                const reply = await axios.post("http://localhost:3000/receiveUserDetails",{
                    withCredentials: true
                })
                alert(`${reply.data}`);
        
                window.location.href = "http://localhost:5173";
            }, 10000);
            
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className={style.container}>
            <h1>Update your details</h1>
            <form onSubmit={handleInput} method="post">
                <div className={style.inputForm}>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" placeholder="Enter your firstname" required />
                </div>
                <div className={style.inputForm}>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Enter your lastname" required />
                </div>
                <div className={style.inputForm}>
                    <label htmlFor="contact">Contact No</label>
                    <input type="number" name="contact" id="contact" placeholder="Enter your phone number" required />
                </div>
                <div className={style.inputForm}>
                    <label htmlFor="email">Email</label> {/* Ensure consistency in name */}
                    <input type="email" name="email" id="email" placeholder="Enter your Email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Updatedetails;
