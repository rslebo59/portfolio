import { NavLink, Link } from 'react-router-dom';
import SiteLogo from '../../assets/logo.svg?react';
import "../../styles/components/layout/header.scss";

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__wrapper">
                <span className="site-header__logo">
                    <Link to="/" aria-label="Home" className="site-header__logo-link">
                        <SiteLogo />
                    </Link>
                </span>

                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__list-item'><NavLink className="menu__list-item--link" to="/work">Work</NavLink></li>
                        <li className='menu__list-item'><NavLink className="menu__list-item--link" to="/about">About</NavLink></li>
                        <li className='menu__list-item menu__list-item--button'><NavLink className='menu__list-item--link' to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}