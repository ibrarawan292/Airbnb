import React from 'react'
import './Offer.css'
import FlatwareIcon from '@mui/icons-material/Flatware';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeckIcon from '@mui/icons-material/Deck';
import SportsIcon from '@mui/icons-material/Sports';


const Offer = () => {
  return (
    <div className='offer-wrapper'>
        <div className="offer-title">
                <h1>What this place offers</h1>
            </div>
        <div className="offer-inner">
            <div className="offer-left">
                <div className="icon-text">
                    <ul>
                        <li><FlatwareIcon/> <h1>Kitchen</h1></li>
                        <li><DirectionsCarIcon/> <h1>Free parking on premises</h1></li>
                        <li><AcUnitIcon/> <h1>Window AC unit</h1></li>
                        <li><DeckIcon/> <h1>Private backyard</h1></li>
                        <li><SportsIcon/> <h1>Hair dryer</h1></li>
                       
                    </ul>
                </div>
            </div>
            <div className="offer-right">
                <div className="icon-text">
                    <ul>
                        <li><FlatwareIcon/> <h1>Kitchen</h1></li>
                        <li><DirectionsCarIcon/> <h1>Free parking on premises</h1></li>
                        <li><AcUnitIcon/> <h1>Window AC unit</h1></li>
                        <li><DeckIcon/> <h1>Private backyard</h1></li>
                        <li><SportsIcon/> <h1>Hair dryer</h1></li>
                       
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Offer