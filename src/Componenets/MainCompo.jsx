import React from 'react';
import styles from './component styles/Maincompo.module.css';
import stall1 from  '../assets/Stall1.png'
import stall2 from '../assets/Stall2.png'
import stall3 from '../assets/Stall3.png'
import stall4 from '../assets/Stall4.png'
import stall5 from '../assets/Stall5.png'
import { useState } from 'react';
import  {Shop1Details,Shop2Details,Shop3Details,Shop4Details,Shop5Details} from './../assets/dishDetails'
// import Shop from './shops';
import { useNavigate } from 'react-router-dom';

function MainComponent(props) {
    const navigate = useNavigate();

   function dishdatasent(dataSent) {
    navigate("/Shop",{state: {shopdetails: dataSent}});
   }
    // Instead of using a and link we can use this and we can pass the data as well. 
    // It says navigate to there and passing the details. there we can get the details using
    // Use locate. So in the a elemtn no need of href instead we are routing to shop routes inside the 
    // onclick function using navigate

    return (
        <div className={styles.container}>
            <div className= {styles.heading}>
            <h1>Great to have you back {props.username}</h1>
            </div>
            <main className= {styles.Shops}>
                <div className= {styles.shopImageContainer}>
                <a onClick={() => {dishdatasent(Shop1Details)}}><img src= {stall1} alt="" srcset="" /></a>
                <h2>Shop 1</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a onClick={() => {dishdatasent(Shop2Details)}}><img src= {stall2} alt="" srcset="" /></a>
                <h2>Shop 2</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a onClick={() => {dishdatasent(Shop3Details)}}><img src= {stall3} alt="" srcset="" /></a>
                <h2>Shop 3</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a onClick={() => {dishdatasent(Shop4Details)}}><img src= {stall4} alt="" srcset="" /></a>
                <h2>Shop 4</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a onClick={() => {dishdatasent(Shop5Details)}}><img src= {stall5} alt="" srcset="" /></a>
                <h2>Shop 5</h2>
                </div>
            </main>
        </div>
    );
}

export default MainComponent;
