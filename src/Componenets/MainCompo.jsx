import React from 'react';
import styles from './component styles/Maincompo.module.css';
import stall1 from  '../assets/Stall1.png'
import stall2 from '../assets/Stall2.png'
import stall3 from '../assets/Stall3.png'
import stall4 from '../assets/Stall4.png'
import stall5 from '../assets/Stall5.png'

function MainComponent(props) {
    return (
        <div className={styles.container}>
            <div className= {styles.heading}>
            <h1>Great to have you back {props.username}</h1>
            </div>
            <main className= {styles.Shops}>
                <div className= {styles.shopImageContainer}>
                <a href="/"><img src= {stall1} alt="" srcset="" /></a>
                <h2>Shop 1</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a href="/"><img src= {stall2} alt="" srcset="" /></a>
                <h2>Shop 2</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a href="/"><img src= {stall3} alt="" srcset="" /></a>
                <h2>Shop 3</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a href="/"><img src= {stall4} alt="" srcset="" /></a>
                <h2>Shop 4</h2>
                </div>
                <div className= {styles.shopImageContainer}>
                <a href="/"><img src= {stall5} alt="" srcset="" /></a>
                <h2>Shop 5</h2>
                </div>
            </main>
        </div>
    );
}

export default MainComponent;
