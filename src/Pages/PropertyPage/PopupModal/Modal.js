import React from 'react'
import './Modal.css'
import CloseIcon from '@mui/icons-material/Close';
import ModalImg from '../../../Images/aircover.jpg';

const Modal = ({ closeModal }) => {

    return (
        <>
            <div className="modal-wrapper" onClick={closeModal}>

            </div>
           <div className="modal-inner">
            <span><CloseIcon onClick={closeModal}/></span>

            <div className="modal-content">
                <img src={ModalImg} alt="" />
                 <p>AirCover is comprehensive protection included for free with every booking.</p>
            </div>
            <hr />
            <div className="modal-data">
                <div className="data-left">
                    <h1>Booking Protection Guarantee</h1>
                    <p>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                </div>
                <div className="data-right">
                    <h1>Booking Protection Guarantee</h1>
                    <p>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                </div>
            </div>
           </div>


        </>
    )
}

export default Modal