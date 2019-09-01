import React from 'react'

const ModalCatchGagal = ({isModal, closeGagal}) => {
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div className="modal-background" onClick={closeGagal}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Fail</p>
                    <button className="delete" aria-label="close" onClick={closeGagal}></button>
                </header>
                <section className="modal-card-body">
                    <p style={{fontSize:30, textAlign:'center'}}>Maaf Kamu Gagal, cobali lagi ?</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={closeGagal}>OK</button>
                </footer>
            </div>
        </div>
     );
}
 
export default ModalCatchGagal;