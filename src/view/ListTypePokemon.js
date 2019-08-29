import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPokemonByType from '../components/Card/CardPokemonByType'
import Header from '../components/Header'
import Footer from '../components/Footer'


const ListTypePokemon = () => {
    const [ dataType, setTypePokemon ]          = useState([])
    const [ url ]                               = useState(`https://pokeapi.co/api/v2/type/`)
    
    useEffect(() => {
        axios.get(url)
        .then((res) =>{
            setTypePokemon(res.data.results)
        })
    },[])
    return ( 
        <React.Fragment>
            <Header/>
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
            <Footer/>
        </React.Fragment>
     );
}
 
export default ListTypePokemon;