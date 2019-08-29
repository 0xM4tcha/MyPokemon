import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

const ModalRelease = ({isModal, closeModal, id, name}) => {
    const { dispatch } = useContext(PokemonContext)
    const release = () => {
        dispatch({type:'REMOVE_POKEMON', id})
        // localStorage.removeItem('MyPokemons', {id});
        closeModal()
    }
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div className="modal-background">
            </div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <h1>Release {name}</h1>
                    <a className="button" onClick={() =>release()}>Ok</a>
                </section>
            </div>
        </div>
     );
}
 
export default ModalRelease;