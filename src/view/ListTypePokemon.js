import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPokemonByType from '../components/Card/CardPokemonByType'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ListTypePokemon = () => {
    const [ dataType, setTypePokemon ]          = useState([])
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then((res) =>{
            setTypePokemon(res.data.results)
        })
    },[])
    function add(a) {
        return a;
      }
      module.exports = add;
    return ( 
        <React.Fragment>
            <Header name='data' MyPokemons={dataType}/>
            <div className="columns" style={{marginBottom:200}} >
                <div className="column is-10 is-offset-1" >
                    {
                        dataType.map(data=>(
                            <CardPokemonByType
                                key={data.name}
                                name={data.name}
                                url={data.url} 
                            />
                            
                        ))
                    }
                </div>
            </div>    
            <Footer name='listPokemon' MyPokemons='list' />
        </React.Fragment>
     );
}
 
export default ListTypePokemon;