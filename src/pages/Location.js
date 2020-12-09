import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wave from '../images/wave.svg';
import arrowLeft from '../images/arrow-white-left.svg';
import axios from 'axios';

export default class Location extends Component { 

    componentDidMount(){
        const options = {
            method: 'GET',
            url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
            headers: {
              'x-rapidapi-key': 'e026e1c32fmshb69e10f5f9a226dp124089jsnacf1e0fab2f4',
              'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
              'ip': '41.210.147.28'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
            
    
    render() {
        let access_key = process.env.REACT_APP_ACCESS_KEY;
        console.log(access_key)
        return (
            <div className="container weather-container">
                <div className="d-flex justify-content-end">
                    <Link to="/" className="mw-50 br-50 p-2 shadow m-4">
                        <img src={arrowLeft} className="w-100 h-100" alt="back arrow" />
                    </Link>
                </div>                
                <div className="display-4 px-4">
                    <div>Enter location for which you want to get the weather</div>
                </div>
                <div className="px-4 my-4 d-flex justify-content-center">
                    <button className="btn btn-danger b-radius px-2" onClick={this.getLocation}>
                       <span className="h2">Use My Current Location</span> 
                    </button>
                </div>
                <div className="mx-3 my-3">
                    <form>
                        <input className="form-control location-input" placeholder="Enter location"></input>
                    </form>                    
                </div>
                <div className="px-4 my-5 d-flex justify-content-center">
                    <button className="btn btn-success b-radius">
                       <span className="h1">GET WEATHER</span> 
                    </button>
                </div>
                <div>
                    <h3>{access_key}</h3>
                </div>
                <div className="w-100">
                    <img src={wave} alt="wave" className="w-100 wave-img"/>
                </div>      
            </div>
        )
    }
}
