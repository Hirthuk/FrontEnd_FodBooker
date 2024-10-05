import style from './component styles/Footer.module.css'
import Linkedin from './../assets/Linkedin.svg'
import Instagram from './../assets/icons8-instagram.svg'
import Github from './../assets/icons8-github.svg'
import Profile from './../assets/User.svg'
function Footer(props) {
    // condition ? value_if_true : value_if_false
    return <div className= {style.container} id= {props.footerHighlighTorF? style.HighLight: ''}> 
    <nav className = {style.imagecontainer}>
        <a href="https://www.linkedin.com/in/sharankumar-p-g3" target="_blank" rel="noopener noreferrer"><img className=  {style.ImageLogo} src= {Linkedin} alt="Linkedin" /></a>
        <a href="https://www.instagram.com/sharan_13_09/" target="_blank" rel="noopener noreferrer"><img className= {style.ImageLogo} src= {Instagram} alt="Instagram" /></a>
        <a href="https://github.com/Hirthuk/" target="_blank" rel="noopener noreferrer"><img className= {style.ImageLogo} src= {Github} alt="Github"  /></a>
        <a href="https://sharankumarg3.netlify.app/" target="_blank" rel="noopener noreferrer"><img className= {style.ImageLogo} src= {Profile} alt="Profile" /></a>
    </nav>
    </div>
}

export default Footer;