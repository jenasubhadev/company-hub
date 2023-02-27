// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import './HomePageNav.styles.scss'

const HomePageNav = () => {
    return (
        <nav>
            <div className="logo-container">
                <Logo />
            </div>
            <ul className='nav-links-container'>
                <li>
                    Home
                </li>
                <li>
                    Services
                </li>
                <li>
                    Login
                </li>
                <li className='sign-up'>
                    Sign Up
                </li>
            </ul> 
        </nav>
    )
}

export default HomePageNav;