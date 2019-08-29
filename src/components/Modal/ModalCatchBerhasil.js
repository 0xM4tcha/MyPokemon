import React, { useContext, useState } from 'react'
import '../Header.css'
import { PokemonContext } from '../../context/PokemonContext'
import { browserHistory } from "react-router"

const ModalCatchBerhasil = ({isModal, closeBerhasil, sprite, idPok}) => {
    const {dispatch} = useContext(PokemonContext)
    const [ nickname, setNickname] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_POKEMON', myPokemon:{
            nickname,idPok,namePok:sprite
        }})
        browserHistory.push("/MyPokemon");
    }
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <h1 style={{textAlign:'center'}}>Gotcha kamu mendapatkan {sprite.name}</h1>
                    
                    <form onSubmit={handleSubmit}>
                    <div className="field has-addons" >
                        <div className="control">
                            <input 
                                className="input addPok" 
                                type="text" 
                                placeholder="Input Nickname Pokemon"
                                value={nickname}   
                                onChange={(e) => setNickname(e.target.value)}
                                required
                                />
                        </div>
                        <div className="control">
                            <input type="submit" value="Add To My Pokemon" className="button btnPok" style={{color:'#43c1f0'}}/>
                        </div>
                    </div>
                    </form>

                </section>
            </div>
        </div>
     );
}
 
export default ModalCatchBerhasil;