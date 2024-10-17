import React from 'react';
import styles from './../Componenets/component styles/dishes.module.css';
import axios from 'axios';

const Dishes = (props) => {


   
    const dish = props.dish; // Destructure the dish object

    const handleDataAxios = async (dishObject) => {
        const response = await axios.post("http://localhost:3000/FavouriteDetails",dishObject,{
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
            
        })

    }
    const favouriteAdd = (event) => {
        event.preventDefault();
        // alert("Favourites has been added");
        handleDataAxios(dish);
    }

    const cartAdded = (event) => {
        event.preventDefault();
        // console.log(dish);
        handleDataAxios(dish);
        
    }
    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>{dish.dish}</span>
            <span className={styles.price}>₹{dish.price}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button  onClick = {cartAdded}className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                <button onClick= {favouriteAdd}className={`${styles.button} ${styles.fav}`}>Favourite</button>
            </div>
        </div>
    );
}

export default Dishes;
