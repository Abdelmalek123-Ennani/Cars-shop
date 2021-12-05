import React from 'react'
import Styles from '../../statefull/Home/home.module.css';
import Vehicle from './vehicle/Vehicle';


const Vehicles = ({cars , addToCart}) => {
    return (
        <>
          {cars.map(car => (
            <Vehicle 
                    image={car.image} 
                    price={car.price}
                    description={car.description}
                    key={car._id}
                    addToCart={() => addToCart(car)}
              />
          ))}
        </>
    )
}

export default Vehicles
