import React, { useState } from "react";
import UserPool from "./UserPool";
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js"

const SignIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    
  const submit = (event) =>{
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })

    const authDetails = new AuthenticationDetails({
      Username:email,
      Password: password
    })

    user.authenticateUser(authDetails, {
        onSuccess: function (result) {
          console.log("OnSuccess: ", result)
        },

        onFailure: function(err) {
            console.log("On Failure: ", err);
        },

        newPasswordRequired: function(result){
          console.log("newpasswordrequired: ", result)
        }

    });
  }

  return(
     <>
      <h2>Sign In</h2>
       <form>
         <label htmlFor='email'>Email</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)}/>

         <label htmlFor='password'>Password</label>
         <input value={password} onChange={(e) => setPassword(e.target.value)}/>

         <button type='submit' onClick={(e) => submit(e)}>Sign In</button>
       </form>
     </>
  )
}

export default SignIn;
