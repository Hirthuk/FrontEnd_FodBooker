import React, { useEffect, useState } from "react";
import styles from './component styles/dishes.module.css';
import axios from "axios";
import Totalprice from './Totalprice'

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
    }, [props.favourites]);

    const removeCart = async (dishId, event) => {
        const response = await axios.post("http://localhost:3000/removeCart", { dishId: dishId }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        const result = response.data.response;
        if (result === "Done") {
            window.location.reload();
        } else {
            alert(`${result}`);
        }
    };

    const addFavourite = async (dishId, dishName, price) => {
        const response = await axios.post("http://localhost:3000/addFavfromCart", {
            dishId: dishId,
            dishName: dishName,
            price: price
        }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true
        });
        alert(`${response.data.response}`);
    };

    // Calculate total price
    const totalPrice = responseDetails.reduce((sum, currentValue) => sum + currentValue.price, 0);

    return (
        <>
            {responseDetails.map((currentValue) => (
                <div key={currentValue.dishId} className={styles.dishRow}>
                    <span className={styles.foodName}>{currentValue.dishName}</span>
                    <span className={styles.price}>₹{currentValue.price}</span>
                    <div className={styles.buttons}>
                        <button onClick={() => {alert("Thanks for buying(Not in live)")}} className={`${styles.button} ${styles.buy}`}>Buy</button>
                        <button onClick={(event) => removeCart(currentValue.dishId, event)} className={`${styles.button} ${styles.addCart}`}>Remove</button>
                        <button onClick={(event) => addFavourite(currentValue.dishId, currentValue.dishName, currentValue.price)} className={`${styles.button} ${styles.fav}`}>Favourite</button>
                    </div>
                </div>
            ))}
            <Totalprice totalprice={totalPrice} />
            </>
    );
};

export default DishesforCart;
