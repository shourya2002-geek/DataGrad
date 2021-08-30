import React from 'react';
import './team1.scss';
import Sidebar from '../Sidebar/sidebar';
import ParticleComponent from '../Particles/particles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Navbar from '../Navbar/navbar';
import { AiFillHeart } from 'react-icons/ai';






const Team = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "150vh"
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
                    height: "130vh",
                    color: "white"
                }}
                className="front"
            >

                <Navbar />



                

                <div className="bottom">
                    <div className="slide">


                        <div className="left">

                            <div className="face1"></div>

                            <div className="below">

                                <h5>Akshat Ajay Das</h5>

                                <p>
                                    I am an 18 y/o Engineering undergrad with a passion for all
                                    things tech-related and have a keen interest in Web Development.
                                    Love automating tasks and am always learning





                                </p>

                                <div className="icons">
                                    <a href="https://github.com/Akshat-Das" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/akshat-das" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/akshat_das/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                </div>







                            </div>




                        </div>






                        <div className="left">

                            <div className="face2"></div>

                            <div className="below">

                                <h5>Khushee Kapoor</h5>

                                <p>
                                    Motivated college sophomore with a keen interest in machine
                                    learning and robotics. Passionate about learning new things and
                                    an avid football fan. 




                                    </p>
                                <div className="icons">
                                    <a href="https://github.com/Akshat-Das" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/akshat-das" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/akshat_das/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                </div>






                            </div>






                        </div>










                    </div>


                    <div className="slide">


                        <div className="left">

                            <div className="face3"></div>

                            <div className="below">

                                <h5>Ayush Batra</h5>

                                <p>
                                    I am a Data Science Sophomore who loves to process,
                                    model, and analyze data to solve real-world problems and create
                                    a better world for all.



                                </p>

                                <div className="icons">
                                    <a href="https://github.com/Akshat-Das" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/akshat-das" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/akshat_das/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                </div>






                            </div>




                        </div>

                        <div className="left">

                            <div className="face4"></div>

                            <div className="below">

                                <h5>Shourya Gupta</h5>

                                <p>
                                    I am a Computer Science Sophomore interested in Full Stack Web
                                    Development, and working to hone skills in Data Science and
                                    Machine Learning.
                                    





                                </p>

                                <div className="icons">
                                    <a href="https://github.com/Akshat-Das" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/akshat-das" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/akshat_das/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                </div>






                        </div>




                    </div>


                    









                </div>

                <div className="name">Made with <AiFillHeart /> by AlphaGrad</div>








            </div>









        </div>



























        </div >
    )
}

export default Team
