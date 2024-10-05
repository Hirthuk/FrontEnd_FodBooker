import React from "react";
import style from './component styles/updatedetails.module.css'

const Updatedetails = (props) => {
    return (<div className= {style.container}>
        <h1>Update your details</h1>
        <form action="/UpdateDetails" method="post">
            <div className= {style.inputForm}>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" placeholder="Enter you firstname" required/>
            </div>
            <div className= {style.inputForm}>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" placeholder="Enter your lastname" required/>
            </div>
            <div className= {style.inputForm}>
                <label htmlFor="Contact">Contact No</label>
                <input type="number" name="contact" id="contact" placeholder="Enter your phone number" required/>
            </div>
            <div className= {style.inputForm}>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" id="Email" placeholder="Enter your Email" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>

    )
}

export default Updatedetails;