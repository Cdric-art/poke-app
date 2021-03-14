import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/pokedex">Vers Pokedex</NavLink>
                <NavLink to="/map">Vers Map</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;
