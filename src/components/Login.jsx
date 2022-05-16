import React from 'react'
import  { useState}  from "react";
import App from '../App';
import "../App.css";
//Bootstrap import for styling 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
  // State values
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentUser,setCurrentUser]=useState("");
  const [sign,setSign]=useState("Blindside Video player");
  const [logout,setLogout]=useState(true);

 // Input from object in absence of database
  const database = [
    {
      username: "atul",
      password: "1234"
    },
    {
      username: "blindside",
      password: "4567"
    }
  ];
  // Error object for easy access and reusablilty
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

   const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
 

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setCurrentUser(userData.username);
        setSign("");
       
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
     
    }
  };
  const handle= (e)=>{
    e.preventDefault();
    setLogout(setIsSubmitted(false));
  }
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="form-label" ><strong>Username</strong> </label>
          <input  className ="form-control form-control-lg" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="form-label" ><strong>Password</strong> </label>
          <input className ="form-control form-control-lg" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="card-footer">
				<div className="d-flex justify-content-center links" >	Don't have an account?<a href ="http://www.pagedonotexist.com/" > Sign Up</a>	</div>
        </div>


      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title" >{sign}</div>
       
        {isSubmitted ? <div>
          <button className="btn btn-danger" onClick = {handle} >Logout</button>
          <p className="float-end"><strong>Signed in as {currentUser}</strong></p>
          <App currentUser = {currentUser} ></App>
        </div> : renderForm}
     
      </div>
    </div>
  );
}