import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.area)
    const {area,region,population,name,flags}=props.country;
    return (
        <div className='country' >
            <h3>Country Name : {name.common}</h3>
            <img  src={flags.png} alt="" />
            <h3>Country population : {population}</h3>
            <p><small>Country area : {area}</small> </p>
            <h3>Region:{region}</h3>
            
            
        </div>
    );
};

export default Country;