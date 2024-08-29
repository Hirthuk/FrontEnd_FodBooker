import {reactdom} from 'react-dom/client'
import styles from './Maincompo.module.css'

function MainComponent(props){
    return  <div className= {styles.container}>
        <button id= {styles.mainButtoner}>name1</button>
        <button id= {styles.mainButtoner}>name2</button>
        <button id= {styles.mainButtoner}>name3</button>
        <button id= {styles.mainButtoner}>name3</button>
        <button id= {styles.mainButtoner}>name3</button>
    </div>
    
}

export default MainComponent;