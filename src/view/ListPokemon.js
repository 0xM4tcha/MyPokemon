import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPokemon from '../components/CardPokemon'
import Header from '../components/Header'
import Footer from '../components/Footer'


const ListPokemon = () => {
    const [ dataPokemon, setDataPokemon ]       = useState([])
    const [ url ]                               = useState(`https://pokeapi.co/api/v2/pokemon/`)
    
    useEffect(() => {
        axios.get(url)
        .then((res) =>{
            setDataPokemon(res.data.results)
        })
        console.log('pok',dataPokemon)
    },[])
    return ( 
        <React.Fragment>
            <Header/>
            <div className="columns" style={{marginBottom:200}} >
                <div className="column is-10 is-offset-1">
                    <div className="columns is-multiline is-offset-2" >
                        {
                            dataPokemon.map(data=>(
                                <div className="column is-3" >
                                    <CardPokemon
                                        key={data.name}
                                        name={data.name}
                                        url={data.url} 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>    
            <Footer/>

            
        </React.Fragment>
     );
}
 
export default ListPokemon;