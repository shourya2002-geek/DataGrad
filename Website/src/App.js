
import React, { useState, useEffect } from "react";
import QuestionsForm from './Questions/questions';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import List from './List/list';
import Sidebar from './Sidebar/sidebar';
import Front from './Front/front';
import Contact from './Contact/contact';
import Team from './Team/team1';
import Explore from './Explore/explore';




function App() {





  return (

      <Router>
        <div>






          <Switch>

            <Route exact path="/" component={Front} />
            <Route exact path="/questions" component={QuestionsForm} />
            <Route exact path="/list" component={List} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            




          </Switch>





        </div>

      </Router>


  );
}

export default App;



