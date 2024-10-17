import React from "react";
import style from './component styles/Myfav.module.css'
import Dishes from './../Componenets/dishfield'


function MyFavourites(props) {
    return (<div className= {style.container}>
        <Dishes/>

    </div>

    )
}
export default MyFavourites;