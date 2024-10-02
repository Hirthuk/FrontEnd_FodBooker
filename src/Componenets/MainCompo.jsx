import React from 'react';
import styles from './component styles/Maincompo.module.css';

function MainComponent(props) {
    return (
        <div className={styles.container}>
            <h1>Great to have you back {props.username}</h1>
        </div>
    );
}

export default MainComponent;
