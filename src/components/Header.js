import React from 'react'
import './Header.css'
import { browserHistory } from "react-router"

const HeaderMy = ({name, MyPokemons}) => {
    const next = () => {
        browserHistory.push(`${name === MyPokemons ? '/':'/MyPokemon'}`);
    }
    return ( 
        <section className="hero title" style={{marginBottom:10}}>
            <div className="hero-body" style={{backgroundColor:'#43c1f0'}}>
                <div className="container" >
                    <h1 className="title has-text-white mainTitle">
                        POKEMON
                    </h1>
                    <h2 className="subtitle has-text-light subTitle">
                        Make your own pokemon
                    </h2>
                    
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            
                            <div className="content has-text-centered is-hidden-mobile">
                                <a 
                                    className="
                                        button 
                                        is-large 
                                        is-rounded 
                                        has-text-white 
                                        is-danger 
                                        is-inverted 
                                        is-outlined" 
                                    onClick={next}
                                 >
                                    Go to {`${name === MyPokemons ? 'List Pokemon':'My Pokemon'}`}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default HeaderMy;