import { Button } from '@mui/material'
import React from 'react'
import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import './Cart.css'
const Cart = () => {
    return (
        <div className='price-cart'>
            <div className="price-cart-inner">
                <div className="per-night-price">
                    <span className='price'>$90</span>
                    {' '}
                    <span className='night'>night</span>
                </div>

                <div className="check-in-out-drop">
                    <div className="check-in-out">
                        <div className="check-in">
                            <Button >CHECK IN</Button>
                            <div className="check-in-date">
                                <span>05/09/2022</span>
                            </div>
                        </div>
                        <div className="check-out">
                            <Button >CHECK OUT</Button>
                            <div className="check-out-date">
                                <span>05/10/2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="check-dropdown">
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart