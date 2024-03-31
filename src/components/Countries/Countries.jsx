import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './Countries.css'




const Countries = () => {
    const [countries, SetCountries]= useState([])
    const [visited,setVisited]=useState([])
    const [visitedFlag,setVisitedFlag]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>SetCountries(data))
    },[])
    const handleVisited =country =>{
        console.log('my visited list')
        const Newvisited=[...visited,country]
        setVisited(Newvisited)
    }
    const handleflag =flag=>{
        console.log('Adding flag')
        const NewVisitedFlag=[...visitedFlag,Country]
        setVisitedFlag(NewVisitedFlag)
        console.log(flag)
    }
    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Country:{visited.length}</h5>
                <ul>
                    {
                        visited.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            {/* Display */}
            <div className="country-container">
            {
              countries.map(country=><Country key={country.cca3}country={country} handlevisitecountry={handleVisited} handleflag={handleflag}></Country>)
              //because of optimization issue we use a key 
            }
            
            </div>
            {
                visitedFlag.map(flag=><img src={flag}></img>)
            }
        </div>
        
    );
};

export default Countries;