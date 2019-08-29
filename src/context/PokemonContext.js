import React, { createContext, useState, useEffect, useReducer } from 'react'
import { PokemonReducer } from '../reducer/PokemonReducer'

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
    const [ MyPokemons, dispatch ]  = useReducer(PokemonReducer, [], () => {
        const localData = localStorage.getItem('MyPokemons');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('MyPokemons', JSON.stringify(MyPokemons))
    },[MyPokemons])
    
   return ( 
            <PokemonContext.Provider value={{MyPokemons, dispatch}}  >
                {props.children}
            </PokemonContext.Provider>
    );

}
 
export default PokemonProvider;