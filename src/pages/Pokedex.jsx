import React, { useEffect, useState } from 'react';
import { apiFetch } from "../components/libs/apiFetch";
import PokemonItem from "../components/PokemonItem";
import PokemonAll from "../components/PokemonAll";
import { NavLink } from "react-router-dom";

const Pokedex = () => {

    const [data, setData] = useState(null)
    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState(null)

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        apiFetch(`/pokemon?offset=${offset}&limit=9`)
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [offset])

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setData(null)
            apiFetch(`/pokemon/${query}`)
                .then(res => setSearchResult(res))
                .catch(e => console.error(e))
        }
    };

    const handleNext = () => {
        setOffset(offset + 9)
    };

    const handlePrevious = () => {
        setOffset(offset - 9)
    }

    return (
        <div className="pokedex">
            <NavLink className="link-home" to="/">Home</NavLink>
            <div className="search">
                <input type="text" onKeyPress={handleSearch} onChange={(e) => setQuery(e.target.value)} value={query}/>
            </div>
            <div className="results">
                {data && <PokemonAll data={data} offset={offset} next={handleNext} previous={handlePrevious}/>}
                {searchResult && <PokemonItem searchResult={searchResult}/>}
            </div>
        </div>
    );
};

export default Pokedex;
