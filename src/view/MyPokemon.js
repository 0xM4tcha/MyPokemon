import React, { useState, useContext, useEffect } from 'react'
import HeaderMyPokemon from '../components/HeaderMyPokemon'
import { PokemonContext } from '../context/PokemonContext'
import CardMyPokemon from '../components/Card/CardMypokemon'

const MyPokemon = () => {
    const { MyPokemons } = useContext(PokemonContext)
   
    useEffect(() => {

    },[])

    return  MyPokemons.length? (
        <React.Fragment>
            <HeaderMyPokemon />
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="columns is-multiline is-offset-2" >
                            {
                                MyPokemons.map(poke => (
                                    <div className="column is-3" >
                                        <CardMyPokemon 
                                            id={poke.id}
                                            nickname={poke.nickname}
                                            idPok={poke.idPok}
                                        /> 
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
        </React.Fragment>
    ): ( 
        <React.Fragment>
            <HeaderMyPokemon />
            <h1 style={{marginTop:0}}>Kamu tidak memiliki pokemon </h1>
        </React.Fragment>
     );
}
 
export default MyPokemon;