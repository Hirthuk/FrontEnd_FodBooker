import React, { useEffect, useState } from "react";
import styles from './component styles/dishes.module.css';
import axios from "axios";


const DishesforFavourite = (props) => {
    const [responseDetails, setResponseDetails] = useState([]);

    useEffect(() => {
        const fetchFavouriteDishes = async () => {
            const propsElements = props.favourites;
            console.log(propsElements);
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
    const removeFavourites = async (dishId,event) => {
        // event.preventDefault();
        const response = await axios.post("http://localhost:3000/removeFavourites",{dishId: dishId},{
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        const result = response.data.response;
        console.log(result);
        if(result=== "Done"){
            window.location.reload();
        }
        else{
            alert(`${result}`);
        }
    }
    const handleCartData = async (dishId,event) => {
        const response = await axios.post("http://localhost:3000/CartDetails",{id: dishId},{
            headers : {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        alert(`${response.data.response}`);
    }
    
return responseDetails.map((currentValue) => {
    return (
        <div className={styles.dishRow}>
            <span className={styles.foodName}>{currentValue.dishName}</span>
            <span className={styles.price}>₹{currentValue.price}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buy}`}>Buy</button>
                <button onClick={(event) => {handleCartData(currentValue.dishId,event)}} className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                <button onClick={(event) => {removeFavourites(currentValue.dishId,event)}} className={`${styles.button} ${styles.fav}`}>Unfavourite</button>
            </div>
        </div>
    );
    
})
   
};

export default DishesforFavourite;
