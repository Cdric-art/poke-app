import React from 'react';
import { NavLink } from "react-router-dom";
import Image from "./Image";

const PokemonAll = ({data, offset, next, previous}) => {
    return <>
        <div className="all-results">
            <ul>
                {data.results && data.results.map((pokemon, i) => (
                    <li key={i}>
                        <Image id={offset + i + 1}/>
                        <NavLink to={`/pokedex/${offset + i + 1}`}>{pokemon.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        <div className="switch">
            {offset >= 9 && <p onClick={previous}>Previous</p>}
            <p onClick={next}>Next</p>
        </div>
    </>
};

export default PokemonAll;
