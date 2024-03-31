import { useState } from 'react';
import './Country.css'

const Country = ({country,handlevisitecountry,handleflag}) => {
    const {name, flags, population, area, cca3 }=country
    const[visited,setVisited]=useState(false)
   const handleButton=()=>{
    setVisited(!visited)
   }
//    console.log(handlevisitecountry)
const passparams =()=>handlevisitecountry(country)

   
    return (
        <div className={`Country ${visited && `visited`}`}>
            <h3 style={{color:visited?'purple':'green'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>{population}</p>
            <p>{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={passparams}>MArk As visited</button><br />
            <button onClick={handleButton}>Visited</button> 
            <button onClick={()=>handleflag(country.flags.png)}>Adding Flag</button>
            { visited? 'I have visited this country':'i will go'}
            
           
            
        </div>
    );
};

export default Country;