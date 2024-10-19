import React from 'react';
import styles from './../Componenets/component styles/dishes.module.css';
import axios from 'axios';

const DishesforFavourite = (props) => {

   
    console.log(props);
   
    [
        {
            "dishId": "S2D1"
        }
    ]
    
    return (
        <div className={styles.dishRow}>
            {/* <span className={styles.foodName}>{dish.dish}</span>
            <span className={styles.price}>₹{dish.price}</span> */}
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button  className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                <button className={`${styles.button} ${styles.fav}`}>UnFavourite</button>
            </div>
        </div>
    );
}

export default DishesforFavourite;
