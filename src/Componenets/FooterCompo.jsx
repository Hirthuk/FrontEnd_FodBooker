import style from './component styles/Footer.module.css'
function Footer(props) {
    // condition ? value_if_true : value_if_false
    return <div className= {style.container} > 
    <h1 id= {props.footerHighlighTorF? style.HighLight: ''}>Sharan</h1>
    </div>
}

export default Footer;