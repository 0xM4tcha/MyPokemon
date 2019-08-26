import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './CardPokemon.css'
import { browserHistory } from "react-router"
const CardPokemon = ({name, url}) => {

    const [ urlK,setUrlK ]   =useState('')
    const idPok = url.split('/')[url.split('/').length - 2]
    
    useEffect(() => {
        setUrlK(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPok}.png`)
    },[])
    
    const next = (idPok) => {
        browserHistory.push("/DetailPokemon");
        localStorage.setItem('id', idPok)
    }
    return (
        <React.Fragment>
            <div className="card cardPok" key={idPok} onClick={() => next(idPok)} >
                <div className="card-content " >
                    {/* <figure className="image is-128x128 pictPok">
                        <img className="is-square " src={urlK} alt="Placeholder image"/>
                    </figure> */}
                    <img src={urlK} />
                    <h1>{name}</h1>
                    <h2>owned : 0</h2>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default CardPokemon;