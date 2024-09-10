import '../styles/header.css'
import Dropdown from './Dropdown'
import Worldicon from './Worldicon'

function Header(props) {
    return (
        <header id="header">
            <div>
                {props.title}
            </div>
            <div className='lang-menu'>
                <Worldicon />
                <Dropdown />
            </div>
        </header>
    )
}

export default Header