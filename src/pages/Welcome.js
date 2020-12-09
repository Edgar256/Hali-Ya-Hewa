import wave from '../images/wave.svg';
import logo from '../images/logo.svg';
import arrow from '../images/arrow-white.svg';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container weather-container">
      <div className="w-100 d-flex my-3">
        <img src={logo} alt="wave" className="w-25 mx-auto"/>
      </div>
      <h1 className="text-center m-3 display-4">
        Welcome to <br/>
        <strong> <i>Hali ya Hewa App</i></strong><br/>
        The most reliable weather forcasts across the globe.
      </h1>
      <div className="w-100 d-flex my-5">
        <div className="w-25 mx-auto d-flex">
            <Link to="/location" className="w-50 mx-auto shadow br-50 h-100">
                <img src={arrow} alt="wave" className="w-100"/>
            </Link>
        </div>        
      </div>
      <div className="w-100">
        <img src={wave} alt="wave" className="w-100 wave-img"/>
      </div>      
    </div>
  );
}

export default Welcome;
