import React, { useState } from 'react';
import './contact1.scss';
import ParticleComponent from '../Particles/particles';
import { RiAccountCircleFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';
import Sidebar from '../Sidebar/sidebar';
import { AiOutlineArrowRight, AiFillHeart } from 'react-icons/ai';

const Contact = () => {

    const [clicked, setClicked] = useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mailid, setMailid] = useState('');
    const [phno, setPhno] = useState('');
    const [msg, setMsg] = useState('');


    var tempparams = {

        fname,
        lname,
        mailid,
        phno,
        msg
    };



    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm(
            'service_82i48cs',
            'template_i0oysrn',
            e.target,
            'user_pmB09m5L0018SWw4Dl0CE'
        ).then(res => {
            console.log(res);
            alert('Your response has been submitted');
        }).catch(err => {
            console.log(err);
        })






    }




    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh"
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
                    color: "white"
                }}
                className="front"
            >




                <div className="navbar">

                    <a rel={'external'} href="/" ><div className="home">AlphaGrad</div></a>
                    <div className="right">

                        <a rel={'external'} href="/questions" ><div className="item">EXPLORE</div></a>


                        <a rel={'external'} href="/contact" ><div className="item">CONTACT</div></a>
                        <a rel={'external'} href="/team" ><div className="item">TEAM</div></a>





                    </div>


                </div>
                <div class="forms">
                    
                        <div class="heading">
                            <h1><strong>Contact Us</strong></h1>
                            <p>We'd love to hear from you!</p>
                        </div>
                        <form method="post" name="myForm" autocomplete="on">

                            <div className="f1">

                                <label for="fname">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    placeholder="Enter First Name"
                                    required
                                />




                            </div>

                            <div className="f1">

                                <label for="lname">Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    placeholder="Enter Last Name"
                                    required
                                />




                            </div>

                            <div className="f1">

                                <label for="lname">Phone Number</label>
                                <input
                                    type="number"
                                    name="phno"
                                    id="phno"
                                    placeholder="Enter Phone number with country code"
                                    required
                                />




                            </div>


                            <div className="f1">
                                <label for="msg">Email ID</label>

                                <input
                                    type="email"
                                    name="mailid"
                                    id="mailid"
                                    placeholder="Enter email address"
                                    required
                                />




                            </div>


                            <div className="f1">
                                <label for="msg">Message</label>

                                <textarea
                                    id="msg"
                                    name="msg"
                                    rows="6"
                                    cols="30"
                                    placeholder="Enter any message you would like to give us"
                                    required
                                ></textarea>




                            </div>

                            <div class="submitbut">
                                <input type="submit" value="Submit" id="submit" onClick={sendEmail} />

                            </div>
                        </form>

                    </div>

                </div>
                <div className="name">Made with <AiFillHeart /> by AlphaGrad</div>
            </div>
        
    )
}

export default Contact;
