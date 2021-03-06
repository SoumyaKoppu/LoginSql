import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserLogin extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
        this.setState({input:input});
    }

    // axios.post("http://localhost:3000/UserLogin",{
    //   Name:this.username,
    //   Password:this.password,
    //     }).then((response) => {
    //   console.log(response.data);
    // });


  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter Username.";
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
        <>
        <h5 style={{marginTop:'20px', textAlign:'center', fontFamily:'Gill Sans, sans-serif'}}>Sign In here</h5>
        <div className="container" style={{width:'400px', marginTop:'20px',borderTop:'2.5px solid red', backgroundColor:'#fff', fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif', fontSize:'12px'}}>
        <form onSubmit={this.handleSubmit} style={{padding:'15px 50px 50px 50px'}}>
  
            <div class="form-group">
            <label for="name">Username/ Phone no:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              id="username" 
              placeholder="UserName/Phone no."/>
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.username}</div>
            </div>

            <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              id="password" 
              placeholder="password"
            />
            <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.password}</div>
            </div> 

        <input type="submit" value="Continue" class="btn btn-success btn-lg btn-block" style={{height:'35px',fontSize:'13px'}}/>
        <Link to = "/UserSignup"><p style={{marginTop:'20px', color:'blue'}}>Don't have an account ? <b>Create One</b></p></Link>      
        </form>
      </div>     
    </>
    );
  }
}
  
export default UserLogin;