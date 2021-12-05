import React, { Component } from 'react'
import Styles from '../../../statefull/Home/home.module.css';
import Button from '../../button/Button';
import Zoom from "react-reveal/Zoom"
import Modal from 'react-modal';

class Vehicle extends Component {
  
    // to controll the model
    state = {
        vehicle : null
    }
    

    openModalHandler = (vehicle) => {
        this.setState({
            vehicle 
        })
    }

    render() {
        return (
            <div className={`
                    col-lg-4 col-md-4 col-md-6 col-xs-6
                    ${Styles.margin}
                `}>
                <Zoom>
                    <img 
                         src={this.props.image} 
                         className="image thumbnail w-100" 
                         id="cursor" 
                         onClick={() => this.openModalHandler(this.props)}
                    />
                    <div className="product-price">
                        <div>$ {this.props.price}</div>
                        <Button click={this.props.addToCart} type="button" typeBtn="btn-success">+ Card</Button>
                    </div>
                </Zoom>

                 
                 {
                    // show and hide the modal
                     this.state.vehicle && (
                       <Modal isOpen={true} >
                            <div className="container">
                                <div className="col-md-12">
                                    <button 
                                            className="btn btn-danger close-modal"
                                            onClick={() => this.openModalHandler(null)}        
                                    >X</button>
                                    <img 
                                        src={this.state.vehicle.image} 
                                        className="image thumbnail w-100" 
                                        id="cursor" 
                                        onClick={() => this.openModalHandler(this.props)}
                                    />
                                </div>
                                <h1>{`price : ${this.props.price} $`}</h1>
                                <p>{`Vehcile description : ${this.state.vehicle.description}`}</p>
                                <button className="btn btn-block btn-success" onClick={this.props.addToCart}>Add to cart</button>
                            </div>
                       </Modal>
                     )
                 }
            </div>

            )
    }
}

export default Vehicle
