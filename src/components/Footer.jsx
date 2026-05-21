import { NavLink } from 'react-router-dom';
import "../styles/components/footer.scss";

export default function Footer() {
    return ( 
        <footer className="site-footer">
            <div className="site-footer__wrapper">
                <span>Ryan Lebo | Front-end Developer</span>
                
                <nav className='site-footer__nav menu'>
                    <ul className='menu__list'>
                        <li className='menu__list-item'><NavLink className='menu__list-item--link' to='https://github.com/rslebo59'>Github</NavLink></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}