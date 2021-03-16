import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { apiFetch } from "../components/libs/apiFetch";

const MapId = () => {

    const {id} = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        apiFetch(`/region/${id}`)
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [id])

    console.log(data)

    return <div className="map">
        <NavLink className="link-home" to="/map">Previous</NavLink>

    </div>
};

export default MapId;
