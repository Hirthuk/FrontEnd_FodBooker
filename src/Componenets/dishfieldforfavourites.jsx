import React, { useEffect, useState } from "react";
import styles from './component styles/dishes.module.css';
import axios from "axios";

const DishesforFavourite = (props) => {
    const [responseDetails, setResponseDetails] = useState([]);

    useEffect(() => {
        const fetchFavouriteDishes = async () => {
            const propsElements = props.favourites;
            const FavDishIds = propsElements.map((currentValue) => currentValue.dishId);
            
            try {
                const fetchedDetails = [];
                for (let dishId of FavDishIds) {
                    const response = await axios.post("http://localhost:3000/getDishDetailsforFavouroite", {
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
        
        fetchFavouriteDishes();
    }, [props.favourites]);  // Runs when `props.favourites` changes

    // console.log(responseDetails);  // Check the fetched data
    const removeFavourites = (event) => {
        event.preventDefault();
        console.log(responseDetails);
    }
return responseDetails.map((currentValue) => {
    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>{currentValue.dishName}</span>
            <span className={styles.price}>₹{currentValue.price}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button  className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                <button onClick={removeFavourites} className={`${styles.button} ${styles.fav}`}>Unfavourite</button>
            </div>
        </div>
    );
    
})
   
};

export default DishesforFavourite;
