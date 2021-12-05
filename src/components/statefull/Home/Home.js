import React, { Component } from 'react';
import Styles from './home.module.css';
import Filter from '../../stateless/filter/Filter';
import Vehicles from '../../stateless/vehicles/Vehicles';
import Cart from '../../stateless/cart/Cart';
import Button from '../../stateless/button/Button';
import Form from '../../stateless/form/Form';
import data from './../../../data.json';

class Home extends Component {

    state =  {
        cars : data.cars,
        brand : "",
        sort : "",
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        isFormOpen : false
    }

    filterVehicleHandler = (event) => {
        const brand = event.target.value;
        if( brand === "" ) {
            this.setState({
                brand,
                cars : data.cars
            });
        } else {
            this.setState({
                brand,
                cars :  data.cars.filter((car) => car.brand == brand)
            });
        }
    }


    sortVehicleHandler = (event) => {
        const sort = event.target.value;

        this.setState({
            sort,
            cars : this.state.cars.sort((a,b) => (
                sort === "Lowest"
                     ? a.price > b.price
                         ? 1
                         : -1
                : sort === "Highest"
                     ? a.price < b.price
                         ? 1
                         : -1  
                : a._id > b._id 
                     ? 1
                     : -1               
            ))
        })
    }


    addToCartHandler = (vehicle) => {

        const cartItems = this.state.cartItems;
        let alreadyExistInTheCart = false;
        let count = 0;

        // check if the vehicle already exist in the cart
        cartItems.forEach(car => {
            if( car._id == vehicle._id ) {
                // increase the count if already exist
                car.count++;
                alreadyExistInTheCart = true;
            }
        })

        // if not exist in the cart , then add it to the cart
        if ( !alreadyExistInTheCart ) {
            cartItems.push({...vehicle , count: 1});
            this.setState({
                cartItems : [...cartItems]
            })
        }

        // reinsert the items to modify the count number of the vehicle
        this.setState({
            cartItems : [...cartItems]
        })

        // add items to local storage
        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
    }

    

    removeItemFromCartHandler = (id) => {
        // remove the vehicle from the cartItems array using it's id
        const cartItems = this.state.cartItems.filter((car) => car._id !== id);
        this.setState({
            cartItems  
        })

        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
    }

    render() {
        console.log(this.state.isFormOpen);
        return (
            <div className="container">
                <div className="row">
                   <div className={this.state.cartItems.length > 0 ? "col-lg-8 col-md-6" : "col-lg-12"}>
                       {/* Biginning of the filter */}
                            <Filter 
                                   filterVehicleHandler={this.filterVehicleHandler}
                                   brand={this.state.brand}
                                   count={this.state.cars.length}
                                   sort={this.state.sort}
                                   sortVehicleHandler={this.sortVehicleHandler}
                            />
                            <hr className="bg-dark" />
                        {/* End of the Filter */}
                         {/* Start of Vehicles */}
                         <div className="row">
                             <Vehicles
                                  cars={this.state.cars} 
                                  addToCart={this.addToCartHandler}      
                            />
                         </div>
                         {/* end of Vehicles */}                        
                   </div>
                   <div className={this.state.cartItems.length > 0 ? "col-lg-4 pt-4" : "d-none"}>
                       {/* Start of heading */}
                       <div className="row">
                           <div className="col-md-8">
                              <h5 className="text-left">You have {this.state.cartItems.length} product(s) in cart</h5>
                           </div>
                       </div>
                       {/* End of heading */}
                       <hr />
                       {/* start of cart elements */}
                       <div className="row pl-3">
                           {
                              this.state.cartItems.length == 0 ? (
                                  <p>There is not item yet</p>
                              ) : (
                                this.state.cartItems.map((car) => (
                                    <Cart 
                                         key={car._id} 
                                         car={car} 
                                         removeItemFromCart={() => this.removeItemFromCartHandler(car._id)}     
                                    />
                                 ))
                              )
                           }
                       </div>
                       <hr />
                       
                       <div className="row">
                           <div className="col-md-12 col-sm-12 col-xs-12"> 
                               <div className="product-price">
                                   <div>
                                     Total: ${this.state.cartItems.reduce((a,b) => (
                                          a + b.price * b.count
                                       ) , 0) }
                                   </div>
                               </div>
                            </div> 
                            <div className="col-md-12 col-sm-12 col-xs-12"> 
                               <div className="product-price">
                                   <Button 
                                           typeBtn="btn-block btn-primary"
                                           click={() => this.setState(prevState => ({
                                            isFormOpen: !prevState.isFormOpen
                                          }))}       
                                    >Order</Button>
                               </div>
                            </div> 
                       </div>

                       {/* End of elements */}
                       <hr />

                       {/* Start of client form */}
                        
                        <div className="row">
                           {
                               this.state.isFormOpen &&  <Form  />
                           }
                        </div>

                        {/* End of client form */}

                   </div>
                </div>
            </div>
        )
    }
}


export default Home;