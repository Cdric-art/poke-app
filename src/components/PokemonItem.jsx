import React from 'react';

const PokemonItem = ({ searchResult }) => {
    return (
        <div className="search-results">
            <div className="image">
                <img src={searchResult.sprites.front_default} alt={searchResult.name}/>
            </div>
            <div className="details">
                <div>
                    <h2>Types</h2>
                    <div className="types">
                        <ul>
                            {searchResult.types.map(type => (
                                <li key={type.slot}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Abilities</h2>
                    <div className="abilities">
                        <ul>
                            {searchResult.abilities.map(ability => (
                                <li key={ability.slot}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;
