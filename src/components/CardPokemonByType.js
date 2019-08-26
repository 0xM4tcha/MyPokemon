import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './CardPokemon.css'
import CardPokemon from './CardPokemon'

const CardPokemonByType = ({name, url}) => {

    const idPok = url.split('/')[url.split('/').length - 2]
    const [ pokemon, setPokemon ] = useState([])
    const [ hide, setHide ]       = useState(true)
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/${idPok}`)
        .then((res) => {
            setPokemon(res.data.pokemon)
        })
    },[])
    
    return (
        <React.Fragment>
            <div className="card"  style={{borderRadius:10}}>
                <div className="card-content">
                    <a className="button" onClick={()=>setHide(!hide)} >{name}</a>
                    <div className="columns" style={{marginBottom:200}} >
                        <div className="column" >
                            <div className="columns is-multiline is-offset-2" >
                                {
                                    pokemon.map(poke=>(
                                        <div className="column is-3" style={{display:`${hide ? 'none':'block'}`}} >
                                            <CardPokemon
                                                name={poke.pokemon.name}
                                                url={poke.pokemon.url}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </React.Fragment>
     );
}
 
export default CardPokemonByType;