import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { wait } from "./components/libs/wait";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Map from "./pages/Map";
import PokedexId from "./pages/PokedexId";
import MapId from "./pages/MapId";


const App = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        wait(4000)
            .then(() => setIsLoading(false))
    }, [])

    return !isLoading ? (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/pokedex" component={Pokedex}/>
                <Route exact path="/pokedex/:id" component={PokedexId}/>
                <Route exact path="/map" component={Map}/>
                <Route exact path="/map/:id" component={MapId}/>
            </Switch>
        </Router>
    ) : <Loader/>
};

export default App;
