import React, { useState } from 'react'
import './Header.css'

const HeaderMyPokemon = () => {
    return ( 
        <section className="hero title" style={{marginBottom:10}}>
            <div className="hero-body" style={{backgroundColor:'#43c1f0'}}>
                <div className="container" >
                    <h1 className="title has-text-white mainTitle">
                        My POKEMON
                    </h1>
                    <h2 className="subtitle has-text-light subTitle">
                        List of your Pokemon
                    </h2>
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <div className="field has-addons" >
                                <div className="control">
                                    <input className="input searchPok" type="text" placeholder="Find a Pokemon"/>
                                </div>
                                <div className="control">
                                    <a className="button btnPok" style={{color:'#43c1f0'}}>
                                        Search
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default HeaderMyPokemon;