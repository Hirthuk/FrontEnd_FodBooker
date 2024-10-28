import React, { useEffect, useState } from "react";
import styles from './component styles/dishes.module.css';


const Totalprice = (props) => {
   

    // console.log(currentValue);
    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>Total</span>
            <span className={styles.price}>₹{props.totalprice}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                
            </div>
        </div>
    );
    
   
};

export default Totalprice;

