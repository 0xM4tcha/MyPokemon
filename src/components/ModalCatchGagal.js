import React, { useState } from 'react'
const ModalCatchGagal = ({isModal, closeGagal}) => {
    return ( 
        <div className={`modal ${isModal && 'is-active'}`}>
            <div className="modal-background">
            </div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <h1>Maaf Kamu Gagal, cobali lagi ?</h1>
                    <a className="button" onClick={closeGagal}>Ok</a>
                </section>
            </div>
        </div>
     );
}
 
export default ModalCatchGagal;