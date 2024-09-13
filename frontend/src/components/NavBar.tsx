import './styles/NavBar.css'
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from '../assets/cc-icon.png'

function NavBar () {
    return (
        <div className="navbar-main">
            <div className="left-nav-container">
                <a href="/home" className="header-left"><img src={logo} alt="logo" className='logo'/>C&C</a>
            </div>

            <div className="right-nav-container">
                <a href="/activities">Activities</a>
                <a href="/pricing">Pricing</a>
                <a href="/about">About</a>
                <a href="/account-settings" className="account-container">
                    <MdOutlineAccountCircle className='account-icon' size='1.5rem'/>
                    <p>Account Name</p>
                </a>
            </div>
        </div>
    )
}

export default NavBar