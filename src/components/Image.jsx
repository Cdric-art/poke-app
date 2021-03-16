import React from 'react';
import { apiFetch } from "./libs/apiFetch";
import { useEffect, useState } from "react";

const Image = ({ id }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        apiFetch(`/pokemon/${id}`)
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [id])

    console.log(data)

    return data && (
        <>
            <img src={data.sprites.front_default} alt={data.name}/>
        </>
    )
};

export default Image;
