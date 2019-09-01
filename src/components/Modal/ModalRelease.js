import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

const ModalRelease = ({isModal, closeModal, id, name}) => {
    const { dispatch } = useContext(PokemonContext)
    
    const release = () => {
        dispatch({type:'REMOVE_POKEMON', id})
        closeModal()
    }
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div class="modal-background" onClick={closeModal}></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Remove pokemon</p>
                <button class="delete" aria-label="close" onClick={closeModal}></button>
                </header>
                <section className="modal-card-body">
                    <p style={{textAlign:'center', fontSize:30}}>Release {name} ?</p>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" onClick={() =>release()}>Ok</button>
                    <button class="button" onClick={closeModal}>Cancel</button>
                </footer>
            </div>
        </div>
     );
}
 
export default ModalRelease;