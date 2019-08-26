import React from 'react'
import { browserHistory } from "react-router"

const Footer = () => {
     const next = () => {
        browserHistory.push("/MyPokemon");
    }
    return ( 
        <footer 
            className="footer is-hidden-tablet" 
            style={{
                backgroundColor:'#43c1f0',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height:100,
                zIndex:2
                }} 
            >
            <div className="content has-text-centered">
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
                    Go to MY Pokemon
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;