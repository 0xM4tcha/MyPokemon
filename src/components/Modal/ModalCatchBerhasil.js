import React, { useContext, useState } from 'react'
import '../Header.css'
import { PokemonContext } from '../../context/PokemonContext'
import { browserHistory } from "react-router"

const ModalCatchBerhasil = ({isModal, sprite, idPok, closeBerhasil}) => {
    const {dispatch} = useContext(PokemonContext)
    const [ nickname, setNickname] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_POKEMON', myPokemon:{
            nickname,idPok,namePok:sprite.name
        }})
        browserHistory.push("/MyPokemon");
    }
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div className="modal-background" onClick={closeBerhasil} ></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Succes</p>
                    <button className="delete" aria-label="close" onClick={closeBerhasil}></button>
                </header>
                <section className="modal-card-body">
                    
                    <p style={{textAlign:'center', fontSize:30}}>Gotcha kamu mendapatkan {sprite.name} !!</p>
                    
                    <form onSubmit={handleSubmit}>
                    <div className="field has-addons" >
                        <div className="control">
                            <input 
                                className="input addPok" 
                                type="text" 
                                placeholder="Input Nickname Your Pokemon"
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
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
     );
}
 
export default ModalCatchBerhasil;