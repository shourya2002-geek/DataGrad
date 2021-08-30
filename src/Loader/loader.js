import React from 'react';
import Spinner from '../assets/spinner.gif';
import './loader.scss';


const Loader = () => {

    
    return (
        <div className="fp-container">
            <img src={Spinner} className="fp-loader" alt="loading"></img>
            
        </div>
    )
}

export default Loader;
