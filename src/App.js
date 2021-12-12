import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
// switch faz o controle das rotas
// route define as rotas em si
// link substitui a tag a 

import Pag1 from "../componentes/Pagina1.js";
import Pag2 from "../componentes/Pagina2";
import Pag3 from "../componentes/Pagina3";

export function App() {
    return (
        <>
            <header>
                <Link to="/"> Home</Link>&nbsp;
                <Link to="/pag1"> Pagina 1</Link>&nbsp;
                <Link to="/pag2"> Pagina 2</Link>&nbsp;
                <Link to="/pag3"> Pagina 3</Link>&nbsp;
            </header>
            <div>
                <Switch>
                    <Route path="/pag1" component={Pag1} />
                    <Route path="/pag2" component={Pag2} />
                    <Route path="/pag3" component={Pag3} />
                </Switch>
            </div>
        </>
    );
}