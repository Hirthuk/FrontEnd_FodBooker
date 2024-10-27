import image from './../assets/Images/Error.jpg'
import styles from './../Componenets/component styles/error.module.css'

import React from 'react'

const Error = () => {
    return(
        <div className= {styles.container}>
            <img className= {styles.imageInfo}src={image} alt="errorImage"  />
        </div>
    )
}

export default Error;