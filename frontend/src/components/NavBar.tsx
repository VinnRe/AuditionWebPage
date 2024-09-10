import './styles/NavBar.css'
import { MdOutlineAccountCircle } from "react-icons/md";

function NavBar () {
    return (
        <div className="navbar-main">
            <div className="left-nav-container">
                <h1 className="header-left">C&C</h1>
            </div>

            <div className="right-nav-container">
                <a href="">Activities</a>
                <a href="">Pricing</a>
                <a href="">About</a>
                <div className="account-container">
                    <MdOutlineAccountCircle className='account-icon' size='1.5rem'/>
                    <p>Account Name</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar