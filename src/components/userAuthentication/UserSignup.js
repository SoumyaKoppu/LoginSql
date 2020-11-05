import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Captcha from '../../Captcha';
import axios from 'axios';

class UserSignup extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
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
        input["first_name"] = "";
        input["last_name"] = "";
        input["email"] = "";
        input["mobilenum"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert('Registration Successful !!');

        // axios.post("http://localhost:3000/UserSignup",{
        //   firstName:this.first_name,
        //   lastName:this.last_name,
        //   email:this.email,
        //   mobileNumber:this.mobilenum,
        //   password:this.password
        // //  confirm_password:confirm_password
        //         }).then((response) => {
        //       console.log(response);
        //     });
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["first_name"]) {
        isValid = false;
        errors["first_name"] = "Please enter your first name.";
      }

      
      if (!input["last_name"]) {
        isValid = false;
        errors["last_name"] = "Please enter your last name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      
      if (!input["mobilenum"]) {
        isValid = false;
        errors["mobilenum"] = "Please enter your mobile number.";
      }

      if (typeof input["mobilenum"] !== "undefined") {
          
        var m_pattern = new RegExp(/^[0-9\b]+$/);
        if (!m_pattern.test(input["mobilenum"])) {
          isValid = false;
          errors["mobilenum"] = "Please enter only number.";
        }else if(input["mobilenum"].length !== 10){
          isValid = false;
          errors["mobilenum"] = "Please enter 10 digit valid mobile number.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }


      // if (!input["confirm_password"]) {
      //   isValid = false;
      //   errors["confirm_password"] = "Please enter your confirm password.";
      // }
  
      // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
      //   if (input["password"] !== input["confirm_password"]) {
      //     isValid = false;
      //     errors["confirm_password"] = "Passwords must be same.";
      //   }
      // } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
        <>
        <h5 style={{marginTop:'20px', textAlign:'center', fontFamily:'Gill Sans, sans-serif'}}>Create Your New Account</h5>
        <div className="container" style={{width:'400px', marginTop:'20px',borderTop:'2.5px solid red', backgroundColor:'#fff', fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif', fontSize:'12px'}}>
        <form onSubmit={this.handleSubmit} style={{padding:'15px 50px 50px 50px'}}>
  
        <div class="form-group">
            <label For="name">First Name:</label>
            <input 
              type="text" 
              name="first_name" 
              value={this.state.input.first_name}
              onChange={this.handleChange}
              class="form-control" 
              id="first_name" />
              
  
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.first_name}</div>
              </div>

            <div class="form-group">
            <label For="name">Last Name:</label>
            <input 
              type="text" 
              name="last_name" 
              value={this.state.input.last_name}
              onChange={this.handleChange}
              class="form-control" 
              id="last_name" />
              
  
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.last_name}</div>
              </div>
  
            <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              id="email" />
  
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.email}</div>
              </div>

              <div class="form-group">
            <label For="name">Mobile Number:</label>
            <input 
              type="text" 
              name="mobilenum" 
              value={this.state.input.mobilenum}
              onChange={this.handleChange}
              class="form-control" 
              id="mobilenum" />
              
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.mobilenum}</div>
              </div>
   
            <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              id="password" />
  
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.password}</div>
             </div>

            {/* <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              id="confirm_password" />
              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.confirm_password}</div>
             </div> */}

             <div name="captcha">
               <Captcha />
             </div>
            <input type="submit" value="Continue" class="btn btn-success btn-lg btn-block" style={{height:'35px',fontSize:'13px'}}/>
            <Link to = "/UserLogin"><p style={{marginTop:'20px', color:'blue'}}>Sign in to an existing account</p></Link>
        </form>
      </div>  
      </>
    );
  }
}
  
export default UserSignup;