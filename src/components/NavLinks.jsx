import '../styles/navlinks.css'
import { Link } from 'react-router-dom';
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.jpg'

function NavLinks() {
    return (
        <nav className='navlinks'>
            <ul className='ulLinks'>
                <Link to="https://github.com/HaDock404" className='liLinks' target="_blank" rel="noopener noreferrer">
                    <img className='image_logo' src={Github} alt=""/>
                    GitHub
                </Link>
                <Link to="https://www.linkedin.com/in/gael-d-044b34304/" className='liLinks' target="_blank" rel="noopener noreferrer">
                    <img className='image_logo' src={Linkedin} alt=""/>
                    LinkedIn
                </Link>
            </ul>
        </nav>
    )
}

export default NavLinks