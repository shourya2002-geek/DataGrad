import React, { useState, useEffect } from "react";
import { ReactSlider } from "react-awesome-slider";
import ParticleComponent from '../Particles/particles';
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/navbar';
import './explore.scss';

const Explore = () => {

    const [showSlider, setShowSlider] = useState(false)
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "110vh"
            }}
        >
            <Sidebar />

            <ParticleComponent />

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    color: "white",

                }}
                className="front">

                <Navbar />

                <div className="drawer">


                    <div className="data">

                    </div>


                    <div className="ai">

                    </div>

                    








                </div>




                <div className="drawer">


                    <div className="data">

                    </div>


                  

                    








                </div>












            </div>







        </div>
    )
}

export default Explore;
