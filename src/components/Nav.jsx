import React from 'react';
import { NavLink } from "react-router-dom";

import Poke from '../assets/icons/pokedex.png';
import Map from '../assets/icons/map.png';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/pokedex">
                        <img src={Poke} alt="Pokedex"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/map">
                        <img src={Map} alt="Map"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
