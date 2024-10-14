import styles from './../Componenets/component styles/dishes.module.css'

const Dishes = (props) => {
    
    return(
        <div className= {styles.container}>
            <h1>Dosa {props.dish.price} {props.dish.dish}</h1>
        </div>
    )
}

export default Dishes;