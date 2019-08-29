import React, { useState, useContext } from 'react'
import './CardPokemon.css'
import { browserHistory } from "react-router"
import { PokemonContext } from '../../context/PokemonContext'

function searchingFor(idPok){
    return function(x){
        return x.idPok.toLowerCase().includes(idPok.toLowerCase()) || !idPok;
    }
}

const CardPokemon = ({name, url}) => {
    const { MyPokemons }    = useContext(PokemonContext)
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
                    {/* <a>owned : {MyPokemons.filter((pok => { return pok.name == name }).map((pok)=> {return pok.name}))}</a> */}
                    <h2>owned : {MyPokemons.filter(searchingFor(idPok)).map(pok =>(
                        <span key={pok.idPok}>{pok.idPok ? 'I':0}</span>
                    ))}
                    </h2>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default CardPokemon;