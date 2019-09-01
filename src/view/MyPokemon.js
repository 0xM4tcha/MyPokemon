import React, { useContext } from 'react'
import Header from '../components/Header'
import { PokemonContext } from '../context/PokemonContext'
import CardMyPokemon from '../components/Card/CardMypokemon'
import Footer from '../components/Footer'

const MyPokemon = () => {
    const { MyPokemons } = useContext(PokemonContext)

    return  MyPokemons.length ? (
        <React.Fragment> 
            <Header name={MyPokemons} MyPokemons={MyPokemons} />
                <div className="columns" style={{paddingBottom:150}}>
                    <div className="column is-10 is-offset-1" >
                        <div className="columns is-multiline is-offset-2"  >
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
            <Footer name={MyPokemons} MyPokemons={MyPokemons} />
        </React.Fragment>
    ): ( 
        <React.Fragment>
            <Header name={MyPokemons} MyPokemons={MyPokemons} />
            <h1 style={{marginTop:0}}>Kamu tidak memiliki pokemon </h1>
            <Footer name={MyPokemons} MyPokemons={MyPokemons} />
        </React.Fragment>
     );
}
 
export default MyPokemon;