import { useEffect, useState } from "react";
import axios from "axios";
import DishesforFavourite from '../Componenets/dishfieldforfavourites'
import styles from './../Componenets/component styles/dishes.module.css';

const MyFavourites = (props) => {
  const [favourites, setFavourites] = useState(null);
  const [error, setError] = useState(null);
  const [getError,settheError] = useState(false)

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getFavouritesUser", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        const result = response.data.response;
        if(result == "Kindly add any favourites"){
         alert(`${result}`);
         setTimeout(() => {
          window.location.href = "http://localhost:5173";
         },1000)
        }
        // console.log(response.data.response);
        setFavourites(result);
      } catch (err) {
        console.error("Error fetching favourites:", err);
        setError("Failed to load favourites. Please try again.");
      }
    };

    fetchFavourites();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className={styles.container}>
        {/* This is like if error is true in paragraph tag error will show if it's true favourites will come
        if(favourites take times to update) that time it is false so loafing paragraph will come once it favourites
        became true dishes will come*/}
      {error ? (
        <p>{error}</p>
      ) : favourites ? (
        <DishesforFavourite favourites={favourites} /> // Pass fetched data to the Dishes component
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyFavourites;