import React from 'react';
import { NavLink } from "react-router-dom";

import Poke from '../assets/icons/pokedex.png';
import Map from '../assets/icons/map.png';

const Nav = () => {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/pokedex">
                    <img src={Poke} alt="Pokedex"/>
                </NavLink>
                <NavLink to="/map">
                    <img src={Map} alt="Map"/>
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
