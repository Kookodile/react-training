import React, {FunctionComponent} from 'react';
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PageNotFound from "./pages/page-not-found";

const App: React.FunctionComponent = () => {

        return  (
            <Router>
                   <div>
                           {/* bar de nav */}
                           <nav className="nav-wrapper teal">
                                <Link to="/" className="brand-logo center">
                                        Pokédex
                                </Link>
                           </nav>
                           {/*Systeme de gestion des routes de l'appli*/}
                           <Switch>
                                   <Route exact path="/" component={PokemonList}/>
                                   <Route exact path="/pokemons" component={PokemonList}/>
                                   <Route path="/pokemons/:id" component={PokemonDetail}/>
                                   <Route component={PageNotFound}/>
                           </Switch>
                   </div>
            </Router>
        )
}

export default App;