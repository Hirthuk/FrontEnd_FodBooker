import styles from './../Componenets/component styles/dishes.module.css'
import Dishes from './dishfield';
import Footer from './FooterCompo';
import { useLocation } from 'react-router-dom';

const Shop = (props) => {

    const location = useLocation();
    // console.log(Object.keys(location.state.shopdetails).length); //So totally 5 values so we have to render the Dishes 5 times
    // Object.values(location.state.shopdetails)[0] this is the way to grab the first and respective elements
    // from an object. Object.values convert the object like array for now and we can grab like array
    // Object.keys take that object keys and Object.values takes the values
    const DishDetails = location.state.shopdetails;
    console.log(DishDetails);

    // Map function for array is used to do smtg for every element in the array with the function we define inside
    // normally map function argument function .map(function(currentvalue, index, array)) shall pass 3 values
    // first argument is currentvalue of the array and second one is index of the element in the array and 3rd is array itself.
    
    // const DishesCount = Object.keys(location.state.shopdetails).length;
    // console.log(DishesCount)
    // not necessary to have count
    return(
        <div className= {styles.container}>
            {Object.values(DishDetails).map((currentdish,index) => {
               return <Dishes key={index} dish ={currentdish} />
            })}
           
            <Footer></Footer>
        </div>
    )
}

export default Shop;