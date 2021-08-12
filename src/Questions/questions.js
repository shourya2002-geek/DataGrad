import React from 'react';
import './questions.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const QuestionsForm = () => {
  
  let history = useHistory();

  

  const options = ["Basic Levels","Intermediate Levels","Advanced Levels","All Levels"];
  const options1 = ["coursera","udacity","udemy","pluralsight"];
  
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [platform, setPlatform] = useState("");
  const [items,setItems] = useState([]);
  

  const data = JSON.stringify({
    course: course,
    level:level,
    platform: platform
    
  })


  


  const handleSubmit = (e) => {

    

    e.preventDefault();
    axios.post("/predict",data,{headers:{"Content-Type" : "application/json"}})
      .then(res => {
        const data = res.data;
        history.push({
          pathname: '/list',
          state: {   
            data
            
    }
      });
        
      })
      .catch(err =>{
        console.log(err);
      })


 
    
    
    
  

}

return (
    <div className="wrapper">

      
      <form method="post" name="myForm" autocomplete="on" >

        <h1 class="title">Lets get your Course!</h1>

        <div className="ips">


          <div class="signup-field">
            <label for="name" className="text">What do you want to learn today?</label>
            <input type="text" name="text" class="input-field" placeholder="Topic" onChange={(e) => setCourse(e.target.value)} required />


          </div>

          <div class="signup-field">
            <label for="last_name" className="text">Please specify your level</label>

            <div>
              <select onChange={e => setLevel(e.target.value)} className="input-field">
                {options.map(option => {
                  return <option value={option} key={option} className="op" >{option}</option>
                })}
              </select>


            </div>
          </div>

          <div class="signup-field">
            <label for="email" className="text">Please specify the platform</label>

            <div>
              <select onChange={e => setPlatform(e.target.value)} className="input-field">
                {options1.map(option => {
                  return <option  className="op" >{option}</option>
                })}
              </select>


            </div>
          </div>
          <div className="img">


          </div>

        </div>



        <div class="signup-button">
          <input type="submit" value="SUBMIT" onClick={handleSubmit} />
        </div>

      </form>
      






    </div>
  )
}

export default QuestionsForm;