import React, { useState, useContext } from 'react'
import './CardPokemon.css'
import { browserHistory } from "react-router"
import { PokemonContext } from '../../context/PokemonContext'

export default function CardPokemon({name, url}){
    const { MyPokemons }    = useContext(PokemonContext)

    const [ owned ]         = useState(MyPokemons.filter((pok) => pok.namePok == name))
    const idPok = url.split('/')[url.split('/').length - 2]
    const [ urlK ]   = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPok}.png`)
    
    const next = (idPok) => {
        browserHistory.push("/DetailPokemon");
        localStorage.setItem('id', idPok)
    }
    return (
        <React.Fragment>
            <div className="card cardPok" key={idPok} onClick={() => next(idPok)} >
                <div className="card-content " >
                    <img src={urlK} />
                    <h1>{name}</h1>
                    <h2>owned : {owned.length}</h2>
                </div>
            </div>
        </React.Fragment>
     );
}
 
