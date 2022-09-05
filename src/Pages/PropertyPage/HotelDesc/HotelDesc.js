import React, { useState } from 'react'
import airImg from '../../../Images/aircover.jpg'
import './HotelDesc.css'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Modal from '../PopupModal/Modal';

const HotelDesc = () => {


    const [isModelopen, setisModalopen] = useState(false)

    const openModal = (e) => {
        e.preventDefault();
        setisModalopen(true)
    }

    const closeModal = () => {
        setisModalopen(false)
    }
    return (
        <>
            <div className="hotel-desc-wrapper">
                <div className="logo">
                    <img src={airImg} alt="" />
                </div>
                <div className="desc">
                    <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                </div>
                <div className="learn-more-btn">
                  <a href="" onClick={openModal}>Learn more</a>
                </div>
                <hr />

                <div className="desc-inner">
                    <div className="lang-icon">
                        <GTranslateIcon />
                    </div>
                    <div className="lang-text">
                        <span>Some info has been automatically translated . <a href="">Show original language</a></span>
                    </div>
                </div>
                <div className="detail-desc">
                    <p>
                        Tongui-shaped cottage in a two-thousand pottery art village. A large monolithic house with a three-floor terrace of the Serra Guitar Cultural Museum, renowned for its distinctive facade in a two-thousand pottery art village that blends very well with nature.
                        <br /><br />
                        Enjoy a relaxing emotional healing holiday in a cozy, welcoming room. On the third floor of a village without a tall building, you can enjoy the open nature scene, and picnic on the
                    </p>
                    <div className="learn-more-btn">
                    <a href="">Show more</a>
                </div>
                </div>
            </div>
            {isModelopen ? <Modal closeModal={closeModal} /> : null}

        </>
    )
}

export default HotelDesc