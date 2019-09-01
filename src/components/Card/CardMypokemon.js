import React, { useState } from 'react'
import './CardPokemon.css'
import ModalRelease from '../Modal/ModalRelease'

const CardMyPokemon = ({nickname, id, idPok}) => {
    const [ isModal, setModal ] = useState(false)

    const closeModal = () => {
        setModal(false)
    }
    return (
        <React.Fragment>
            <ModalRelease isModal={isModal} id={id} closeModal={closeModal} name={nickname} />
            <div className="card cardPok" key={id} style={{marginBottom:10}} >
                <div className="card-content " >
                    <button className="delete" style={{backgroundColor:'red'}} onClick={() => setModal(true)}  ></button>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPok}.png`} />
                    <h1>{nickname}</h1>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default CardMyPokemon;