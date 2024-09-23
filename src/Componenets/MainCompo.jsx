import {reactdom} from 'react-dom/client'
import styles from './Maincompo.module.css'

function MainComponent(props){
    return  <div className= {styles.container}>
        <h1>Great to have you back Sharan</h1>
    </div>
    
}

export default MainComponent;