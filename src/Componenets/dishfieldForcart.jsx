import React, { useEffect, useState } from "react";
import styles from './component styles/dishes.module.css';
import axios from "axios";

const DishesforCart = (props) => {
    const [responseDetails, setResponseDetails] = useState([]);

    useEffect(() => {
        const CartDetails = async () => {
            const propsElements = props.favourites;
            const FavDishIds = propsElements.map((currentValue) => currentValue.dishId);
            
            try {
                const fetchedDetails = [];
                for (let dishId of FavDishIds) {
                    const response = await axios.post("http://localhost:3000/getDishDetailsforCart", {
                        dishId: dishId
                    }, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true
                    });
                    fetchedDetails.push(response.data.response);  // Assuming response format contains 'response'
                }
                setResponseDetails(fetchedDetails);
            } catch (error) {
                console.error("Error fetching dish details:", error);
            }
        };
        
        CartDetails();
    }, [props.favourites]);  // Runs when `props.favourites` changes

    // console.log(responseDetails);  // Check the fetched data
return responseDetails.map((currentValue) => {
    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>{currentValue.dishName}</span>
            <span className={styles.price}>₹{currentValue.price}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button  className={`${styles.button} ${styles.addCart}`}>remove</button>
                <button className={`${styles.button} ${styles.fav}`}>Favourite</button>
            </div>
        </div>
    );
    
})
   
};

export default DishesforCart;
