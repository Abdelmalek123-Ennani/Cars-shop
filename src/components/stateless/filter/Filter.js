import React from 'react'
import Styles from '../../statefull/Home/home.module.css';
import Button from '../button/Button';

const Filter = (props) => {

    const {filterVehicleHandler , brand , count , sort , sortVehicleHandler} = props;

    return (
    <div className={`row ${Styles.background}`}>
            <div className="col-md-4 col-sm-4 col-xs-4">
                <div className={Styles.text}>
                    Véhicules : {count}
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
                <select 
                       className="form-control"
                       onChange={filterVehicleHandler}
                       value={brand}
                       >
                    <option value="">All</option>
                    <option>Mercedes</option>
                    <option>Toyota</option>
                    <option>Nissan</option>
                </select>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
                <select 
                     className="form-control"
                     value={sort}
                     onChange={sortVehicleHandler}     
                >
                    <option>Lastest</option>
                    <option>Lowest</option>
                    <option>Highest</option>
                </select>
            </div>
    </div>
    )
}

export default Filter
