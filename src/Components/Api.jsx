import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';


function Api() {
    const [data, setData] = useState("");
    const [weatherData, setweatherData] = useState("");
    const apiKey = '44bc402567cf854227b1c5407ba40794';
    const base_url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${data}`;

    const fetchdata = async () => {
        const result = await axios.get(`${base_url}`);
        console.log(result.data);
        setweatherData(result.data);
        console.log(data);
    };
    useEffect(() => {
        setweatherData()
    }, [])
    return (
        <div>
            <div className="container p-5 m-5" style={{ height: '500px' }}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 m-5 p-5 d-flex align-items-center text-white">
                        <MDBInput label='Enter Location' id='form1' type='text' onChange={(e) => setData(e.target.value)} />
                        <i class="fa-solid fa-magnifying-glass mx-3" onClick={fetchdata}></i>
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {weatherData && weatherData.main && (
                            <div className="row  mx-5 px-5">
                                <div className="col-12 px-5 d-5lex align-items-center text-white text-center">
                                    <h3>Temperature  {(weatherData.main.temp - 273.15).toFixed(2)} °C</h3>
                                    <br />
                                    <h4>Condition: {weatherData.weather[0].description}</h4>
                                    <br />
                                    <h4>Location :{weatherData.name}</h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Api