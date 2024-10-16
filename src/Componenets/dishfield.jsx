import React from 'react';
import styles from './../Componenets/component styles/dishes.module.css';

const Dishes = (props) => {

    const favouriteAdd = (event) => {
        event.preventDefault();
        alert("Favourites has been added");
    }

    const cartAdded = (event) => {
        event.preventDefault();
        alert("Your cart is updated");
    }
    const { dish } = props; // Destructure the dish object

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
