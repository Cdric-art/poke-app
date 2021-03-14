import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { wait } from "./components/libs/wait";
import Nav from "./components/Nav";
import Loader from "./components/Loader";


const App = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        wait(4000)
            .then(() => setIsLoading(false))
    }, [])

    return !isLoading ? (
        <Router>
            <Nav/>
            <Switch>

            </Switch>
        </Router>
    ) : <Loader/>
};

export default App;
