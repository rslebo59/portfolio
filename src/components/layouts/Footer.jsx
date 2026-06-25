/* global __BUILD_YEAR__ */

import { NavLink } from 'react-router-dom';
import "../../styles/components/layout/footer.scss";

export default function Footer() {
    return ( 
        <footer className="site-footer">
            <div className="site-footer__wrapper">
                <span>&copy;{__BUILD_YEAR__} Ryan Lebo. Front-end Developer</span>
                
                <nav className='site-footer__nav menu'>
                    <ul className='menu__list'>
                        <li className='menu__list-item'><NavLink className='menu__list-item--link' target="_blank" to='https://github.com/rslebo59'>Github</NavLink></li>
                        <li className='menu__list-item'><NavLink className='menu__list-item--link' target="_blank" to='https://linkedin.com/in/rslebo10'>LinkedIn</NavLink></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}