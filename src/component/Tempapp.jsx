import axios from 'axios';
import React , {useState, useEffect } from 'react';
import './css/style.css';

const Tempapp = () => {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Dehradun");

    const searchData = (event) => {
        setSearch(event.target.value);

    }

    useEffect(() => {
        const fetchApi = async() => {
            const response = 
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7bd79a9a457cc35acf165b0050d5cf1`);
            if(response.data){
                console.log(response.data);
                setCity(response.data.main);
            }
        }

        fetchApi();
    }, [search])
   

    return(
        
        <>
            <div className='box'>
                <div className="inputData">
                    <input type="search" 
                            className='inputField'
                            onChange = {searchData}
                    />
                </div>
                { !city ? (<p> Data not found </p> )
                    :
                (
                    <div>
                <div className='info'>
                    <h2 className='location'>
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className = "temp">
                       {city.temp}^Cel
                    </h1>
                    <h3>Min : {city.temp_min}^Cel | Max : {city.temp_min}^Cel</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                )
}
            </div>
        </>
    )
}

export default Tempapp;