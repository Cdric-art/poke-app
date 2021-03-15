import React from 'react';

const PokemonAll = ({data, offset, next, previous}) => {
    return <>
        <div className="all-results">
            <ul>
                {data.results && data.results.map((pokemon, i) => (
                    <div key={i}>
                        <span>{offset + i + 1} : </span>
                        <li>{pokemon.name}</li>
                    </div>
                ))}
            </ul>
        </div>
        <div className="switch">
            {offset >= 10 && <p onClick={previous}>Previous</p>}
            <p onClick={next}>Next</p>
        </div>
    </>
};

export default PokemonAll;
