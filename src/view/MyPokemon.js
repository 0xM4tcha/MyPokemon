import React, { useState, useContext } from 'react'
import HeaderMyPokemon from '../components/HeaderMyPokemon'
import { PokemonContext } from '../context/PokemonContext'
const MyPokemon = () => {
    const { MyPokemons } = useContext(PokemonContext)

    return  MyPokemons.length? (
        <React.Fragment>
            <HeaderMyPokemon />
            <h1>My Pokemon</h1>
            {
                MyPokemons.map(poke => (
                    <span>nickname : {poke.nickname}</span>
                ))
            }
        </React.Fragment>
    ): ( 
        <React.Fragment>
            <HeaderMyPokemon />
            <h1>Kamu tidak memiliki pokemon </h1>
        </React.Fragment>
     );
}
 
export default MyPokemon;