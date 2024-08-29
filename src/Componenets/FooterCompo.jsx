import {reactDom} from 'react-dom/client'
import style from './footer.module.css'

function Footer(props) {
    return <div className= {style.container}>
    <p>This is Footer</p>
    </div>
}

export default Footer;