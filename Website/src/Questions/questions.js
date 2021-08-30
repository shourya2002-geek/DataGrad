import React from 'react';
import './questions.scss';
import { useState, createContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ParticleComponent from '../Particles/particles';
import { AiFillHeart } from 'react-icons/ai';
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/navbar';
import useLoader from '../Hooks/useLoader';






const QuestionsForm = () => {



  let history = useHistory();



  const levels = ["Beginner", "Intermediate", "Advanced"];

  const skills = ["software engineering", "programming", "psychology", "cybersecurity", "machine learning", "blockchain", "data_science", "javascript", "app development", "finance"]

  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [loading,setloading] = useState(false);
  
  const [loader,showLoader,hideLoader] = useLoader();
  


  const data = JSON.stringify({
    name: name,
    skill: skill,
    level: level,


  })





  const handleSubmit = (e) => {



    e.preventDefault();
    showLoader();


    axios.post("http://localhost:5000/predict", data, { headers: { "Content-Type": "application/json" } })
    .then(res => {
      
      hideLoader();
      const data = res.data;
      history.push({
        pathname: '/list',
        state: {
          data

        }
      });

    })
    .catch(err => {
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
          color: "white"
        }}
        className="front"
      >

        <Navbar />




        <form method="post" name="myForm" autocomplete="on" >

          <h1 class="title">Lets get your Course!</h1>

          <div className="outer">


            <div className="ips">




            <div class="signup-field">
                
                <div className="text">Your Name</div>
                <div>
                  <input className="op" onChange={e => setName(e.target.value)}></input>



                </div>

               


              </div>




              <div class="signup-field">
              <div className="text">What do you want to learn today?</div>
                <div>
                  <select onChange={e => setSkill(e.target.value)} className="input-field">
                    {skills.map(option => {
                      return <option value={option} key={option} className="op" >{option}</option>
                    })}
                  </select>


                </div>


              </div>

              <div class="signup-field">
              <div className="text">PLease specify your level</div>

                <div>
                  <select onChange={e => setLevel(e.target.value)} className="input-field">
                    {levels.map(option => {
                      return <option value={option} key={option} className="op" >{option}</option>
                    })}
                  </select>


                </div>
              </div>


            </div>












          </div>



          <div class="signup-button">

            <input type="submit" value="SUBMIT" onClick={handleSubmit}  />


          </div>

          

        </form>


        <div className="name">Made with <AiFillHeart /> by AlphaGrad</div>












      </div>
    </div>


  )
}

export default QuestionsForm;