import React, { Component } from 'react'
import Search from '../Search/Search'
import './styles.css'

class NavMenu extends Component {
    render() {
        return (
            <div>
               <div className="page">
               <nav className="page__menu menu">
               <ul className="menu__list r-list">
               <li className="menu__group"><a href="/" className="menu__link r-link text-underlined">Home</a></li>
               <li className="menu__group"><a href="/" className="menu__link r-link text-underlined">Featured Movies</a></li>
               <li className="menu__group"> 
                    <a className="menu__link r-link"><Search/></a>
               </li>
               <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Top Ranked Movies</a></li>
               </ul>
               </nav>
               </div> 
            </div>
        )
    }
}

export default NavMenu;
