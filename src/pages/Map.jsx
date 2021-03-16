import React, { useEffect, useState } from 'react';
import { apiFetch } from "../components/libs/apiFetch";
import { Link, NavLink } from "react-router-dom";

const Map = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        apiFetch('/region')
            .then(res => setData(res))
            .catch(e => console.error(e))
    }, [])

    console.log(data)

    return <div className="map">
        <NavLink className="link-home" to="/">Home</NavLink>
        <div className="results-region">
            {data && data.results.map((region, i) => (
                <ul key={i}>
                    <li>
                        <Link to={`/map/${i + 1}`}>{region.name}</Link>
                    </li>
                </ul>
            ))}
        </div>
    </div>
};

export default Map;
