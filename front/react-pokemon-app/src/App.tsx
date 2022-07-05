import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";
import {Box, Paper} from "@mui/material";

const App: React.FunctionComponent = () => {
    const[pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div className="container">
            <h1>Pokédex</h1>
            <p>Il y a  {pokemons.length} pokémons dans l'appli !</p>
            <div className="row">
                {pokemons.map(({name,id,created,picture})=>
                    <div className="col s6 m4" key={id}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={picture} alt={name}/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>N°:{id}</p>
                                    <p>Nom:{name}</p>
                                </div>

                            </div>
                        </div>


                    </div>


                )}

                  </div>
                </div>
                    )}

export default App;