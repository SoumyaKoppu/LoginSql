import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserLogin from './components/userAuthentication/UserLogin';
import UserSignup from './components/userAuthentication/UserSignup';

function App() {
  return (
    <div className="App" >
      <div style={{height:'68px', backgroundColor:'#232f3e', borderBottom:'1px solid #363636', color:'#fff'}}>
          <h4 style={{paddingLeft:'60px', paddingTop:'15px', fontWeight:'bold', fontStyle:'italic', fontFamily:'Helvetica Neue'}}>ALBENUS</h4>
      </div>
      <div>
      <BrowserRouter>
            <Switch>
              <Route path = '/' exact component = {UserLogin}/>
                <Route path = "/UserLogin" exact component = {UserLogin} />
                <Route path = "/UserSignup" exact component = {UserSignup} />
            </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
