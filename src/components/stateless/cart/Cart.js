import React from 'react'
import Styles from '../../statefull/Home/home.module.css';
import Button from '../button/Button';
import Fade from "react-reveal/Fade"

const Cart = ({car , removeItemFromCart}) => {
    return (
           <div className={`col-md-6 offset-md-3 col-sm-3 col-xs-3 ${Styles.marginbottom}`}>
               <Fade left cascade>
                    <img src={car.image} className="image w-100 thumbnail" />
                    <div className="product-qty">
                        <div>${car.price} X {car.count}</div>
                        <Button click={removeItemFromCart} typeBtn="btn-danger px-3 py-0 font-size-16">X</Button>
                    </div> 
                </Fade>
            </div>   
    )
}

export default Cart;
