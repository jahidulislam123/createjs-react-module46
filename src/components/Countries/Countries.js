import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css';


const Countries = () => {

    const[countris,setCountries]= useState([])

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    } ,[])
    return (
        <div >
            <h1>Hello From Countris : {countris.length} !!</h1>

           <div className='countries-style'>
           {
                countris.map(country=> <Country
                    country={country}
                    key={country.cca3}
                    //  name={country.name.common} 
                    //  population={country.population}
                     
                    //   region={country.region} 
                      
                      
                      
                      
                      >
                     </Country> )
            }
           </div>
        </div>
    );
};



export default Countries;