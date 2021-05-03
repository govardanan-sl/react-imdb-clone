import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import './styles.css'

class NavMenu extends Component {
    render() {
        return (
            <div>
               <div className="page">
               <nav className="page__menu menu">
               <ul className="menu__list r-list">
               <li className="menu__group"><Link to="/" className="menu__link r-link text-underlined">Home</Link></li>
               <li className="menu__group"><Link to="/favourites" className="menu__link r-link text-underlined">Favourite Movies</Link></li>
               <li className="menu__group"> 
                    <Link className="menu__link r-link"><Search/></Link>
               </li>
               <li className="menu__group"><Link to="#0" className="menu__link r-link text-underlined">Top Ranked Movies</Link></li>
               </ul>
               </nav>
               </div> 
            </div>
        )
    }
}

export default NavMenu;
