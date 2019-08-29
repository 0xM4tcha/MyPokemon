import React, { useState } from 'react'
import ModalCatchBerhasil from './/ModalCatchBerhasil'
import ModalCatchGagal from './ModalCatchGagal'

const ModalStart = ({isModal, sprite, closeModal, idPok}) => {
    const [ modalBerhasil, setBerhasil ] = useState(false)
    const [ modalGagal, setGagal ]       = useState(false)
    
    const handleGatcha = () => {
        const random = Math.floor(Math.random() * 10)
        if(random <= 4){
            // setGatcha(random)
            setBerhasil(true)
            // closeModal()
        }else{
            // setGatcha(random)
            setGagal(true)
            // closeModal()
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
            
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <h1>Catch {sprite.name}?</h1>
                    {/* <h1>{gatcha}</h1> */}
                    <a className="button" onClick={handleGatcha}>Ok</a>
                    <a className="button" onClick={closeModal}>No</a>
                </section>
            </div>
        </div>
     );
}
 
export default ModalStart;