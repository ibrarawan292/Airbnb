import React from 'react'
import './Grid.css'
import StarIcon from '@mui/icons-material/Star';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../../../Images/img-1.jpg'
import img2 from '../../../Images/img-2.jpg'
import img3 from '../../../Images/img-3.jpg'
import person from '../../../Images/person.jpg'
import HotelFeature from '../HotelFeatures/HotelFeature';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import HotelDesc from '../HotelDesc/HotelDesc';
import Offer from '../Offers/Offer';
import Calendar from '../Calendar/Calendar';
import Reviews from '../Reviews/Reviews';
import Cart from '../PriceCart/Cart';



const Grid = () => {
  return (
    <>
      <div className='grid-wrapper'>
        <div className="grid-head">
          <h1>PHU NAM HOUSE - HOBBIT</h1>
        </div>
        <div className="grid-btm">
          <div className="grid-l">
            <span><StarIcon />5.0.</span>
            <a href="" className='total-reviews'>17 reviews</a>
            <a href="" className='rev-name'>. Phú Quốc, tỉnh Kiên Giang, Vietnam</a>
          </div>
          <div className="grid-r">
            <a href=""><span><IosShareIcon /> Share</span></a>
            <a href=""><span><FavoriteBorderIcon /> Save</span></a>
          </div>
        </div>
        <div className="grid-images">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="wider-img">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 p-0">
                  <div className="sm-img">
                    <img src={img2} alt="" />
                  </div>
                </div>
                <div className="col-md-6  p-0">
                  <div className="sm-img">
                    <img src={img3} alt="" />
                  </div>
                </div>
                <div className="col-md-6  p-0">
                  <div className="sm-img">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div className="col-md-6  p-0">
                  <div className="sm-img">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Grid-images-end */}

        <div className="hotel-data">
          <div className="row">
            <div className="col-md-12">
              <div className="hotel-feature">
                <div className="feature-info">
                  <h1>
                    Private room in bungalow hosted by Bao Sang
                  </h1>
                  <p>2 guests1 bedroom1 bed1 private bath</p>
                </div>
                <div className="feature-img">
                  <img src={person} alt="" />
                </div>
              </div>
              <hr />
              <HotelFeature Icon={WorkspacePremiumIcon} title={"Sungwon is a Superhost"} desc={"Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."}/>
              <HotelFeature Icon={LocationOnIcon} title={"Great location"} desc={"90% of recent guests gave the location a 5-star rating."}/>
              <HotelFeature Icon={EventIcon} title={"Free cancellation before Sep 20."}/>
              <hr />

              <HotelDesc/>
              <hr/>
              <Offer/>
              <hr />
              <Calendar/>
              <hr />
              <Reviews/>
            </div>
          </div>
        </div> {/* hotel-data-ended */}

       
      </div> {/* grid-wrapper-ended */}
     

    </>

  )
}

export default Grid