import React from 'react';
import './team.scss';
import Sidebar from '../Sidebar/sidebar';
import ParticleComponent from '../Particles/particles';
import { AiFillGithub ,AiFillLinkedin ,AiFillInstagram  } from 'react-icons/ai';
import Navbar from '../Navbar/navbar';

const Team = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "200vh"
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
                    height: "150vh",
                    color: "white"
                }}
                className="front"
            >


                <Navbar />

                
                
                
                <section class="bottom">
                
                    <div class="row d-flex justify-content-center align-content-center">
                        <div class="col-lg-4">
                            <div class="card">

                                <div className="face1"></div>
                                <div class="card-body">
                                    <h5 class="card-title">Akshat Ajay Das</h5>
                                    <p class="card-text">
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
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div className="face2"></div>
                                <div class="card-body">
                                    <h5 class="card-title">Ayush Batra</h5>
                                    <p class="card-text">
                                        I am a Data Science Sophomore who loves to process,
                                        model, and analyze data to solve real-world problems and create
                                        a better world for all.
                                    </p>

                                    <div className="icons">
                                    <a href="https://github.com/khusheekapoor" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/khusheekapoor/" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/khushee._.kapoor/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-content-center">
                        <div class="col-lg-4">
                            <div class="card">
                                <div className="face3"></div>
                                <div class="card-body">
                                    <h5 class="card-title">Khushee Kapoor</h5>
                                    <p class="card-text">
                                        Motivated college sophomore with a keen interest in machine
                                        learning and robotics. Passionate about learning new things and
                                        an avid football fan. Strong advisor of free education
                                        throughout the whole world.
                                    </p>


                                    <div className="icons">
                                    <a href="https://github.com/Ayush-Batra" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/ayush-batra-18959b200/" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/ayush.batra_/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div className="face4"></div>
                                <div class="card-body">
                                    <h5 class="card-title">Shourya Gupta</h5>
                                    <p class="card-text">
                                        I am a Computer Science Sophomore interested in Full Stack Web
                                        Development, and working to hone skills in Data Science and
                                        Machine Learning. Cricket and chai, nothing more I aspire.
                                    </p>

                                    <div className="icons">
                                    <a href="https://github.com/shourya2002-geek" target="_blank"
                                    ><AiFillGithub size={35} /></a>
                                    <a href="https://www.linkedin.com/in/shourya-gupta-80237b1b9/" target="_blank"
                                    ><AiFillLinkedin size={35}/></a>
                                    <a href="https://www.instagram.com/hints.of.tangerine/" target="_blank"
                                    ><AiFillInstagram size={35}/></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



























        </div>
    )
}

export default Team
