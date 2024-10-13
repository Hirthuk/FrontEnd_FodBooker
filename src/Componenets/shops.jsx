import styles from './../Componenets/component styles/dishes.module.css'
import Dishes from './dishfield';
import Footer from './FooterCompo';
import { useLocation } from 'react-router-dom';

const Shop = (props) => {

    const location = useLocation();
    console.log(location.state.shopdetails);
    // Object.values(location.state.shopdetails)[0] this is the way to grab the first and respective elements
    // from an object. Object.values convert the object like array for now and we can grab like array
    return(
        <div className= {styles.container}>
            <Dishes/>
            <Footer></Footer>
        </div>
    )
}

export default Shop;