import React, { useEffect } from "react";
import styles from './component styles/dishes.module.css'
import axios from "axios";

const DishesforFavourite = (props) => {

   

    useEffect(() => {
        const details = props.favourites;

    const SetdishIds = new Set(details.map((currentValue => 
        console.log(currentValue))
    ));
        const axiosFunction = (SetdishIds) => {
        const DishDetails = axios.post("http://localhost:3000/getDishDetailsforFavouroite",SetdishIds,{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials: true
        })
    }
    axiosFunction();

    },[props])
     

    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>Dosa</span>
            <span className={styles.price}>₹30</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button  className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                <button className={`${styles.button} ${styles.fav}`}>Favourite</button>
            </div>
        </div>
    );
}

export default DishesforFavourite;