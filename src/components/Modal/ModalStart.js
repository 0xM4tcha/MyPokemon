import React, { useState } from 'react'
import ModalCatchBerhasil from './/ModalCatchBerhasil'
import ModalCatchGagal from './ModalCatchGagal'

const ModalStart = ({isModal, sprite, closeModal, idPok}) => {
    const [ modalBerhasil, setBerhasil ] = useState(false)
    const [ modalGagal, setGagal ]       = useState(false)
    
    const handleGatcha = () => {
        const random = Math.floor(Math.random() * 10)
        if(random <= 4){
            setBerhasil(true)
        }else{
            setGagal(true)
        }
    }
    const closeBerhasil = () => {
        setBerhasil(false)
    }
    const closeGagal = () => {
        setGagal(false)
    }

    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <ModalCatchBerhasil isModal={modalBerhasil} closeBerhasil={closeBerhasil} sprite={sprite} idPok={idPok} />
            <ModalCatchGagal isModal={modalGagal} closeGagal={closeGagal}/>
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Catch Pokemon</p>
                        <button className="delete" aria-label="close" onClick={closeModal}></button>
                    </header>
                    <section className="modal-card-body ">
                        <p style={{fontSize:30, textAlign:'center'}}>Catch {sprite.name}?</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={handleGatcha}>OK</button>
                        <button className="button" onClick={closeModal}>NO</button>
                    </footer>
                </div>
        </div>
     );
}
 
export default ModalStart;