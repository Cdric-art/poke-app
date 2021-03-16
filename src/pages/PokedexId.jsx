import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import PokemonItem from "../components/PokemonItem";
import { useState } from "react";
import { apiFetch } from "../components/libs/apiFetch";
import { useEffect } from "react";

const PokedexId = () => {

    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        apiFetch(`/pokemon/${id}`)
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [id])

    return <div className="pokedex">
        <NavLink className="link-home" to="/pokedex">Previous</NavLink>
        <div className="results">
            {data && <PokemonItem searchResult={data}/>}
        </div>
    </div>
};

export default PokedexId;
