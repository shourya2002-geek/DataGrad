
import './App.css';
import React, { useState, useEffect } from "react";
import QuestionsForm from './Questions/questions';
import { HashRouter as Router } from 'react-router-dom';
import { Switch ,Route } from 'react-router-dom';
import List from './List/list';
import Sidebar from './Sidebar/sidebar';
import Front from './Front/front';


function App() {





  return (
    <Router>
      <div className="sections">
      <Sidebar />

        <Switch>
          
          <Route exact path="/" component={Front} />
          <Route exact path="/questions" component={QuestionsForm} />
          <Route exact path="/list" component={List} />




        </Switch>





      </div>

    </Router>

  );
}

export default App;
