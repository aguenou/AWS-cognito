import React, { useState } from "react";
import UserPool from "./UserPool";
import ConfirmRegister from "./ConfirmRegister";
const SignUp = () => {

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [given_name,setGivenName] = useState("");
  const [password,setPassword] = useState("");

  const attributeList = []

  const givenNameAttribute = (
     {Name:'given_name', Value : given_name}
  );
  const FamilyNameAttribute = (
        {Name:'family_name', Value : name}
  );
  const EmailAttribute = (
    {Name:'email', Value: email}
  )

  attributeList.push(givenNameAttribute, FamilyNameAttribute,EmailAttribute);

  const submit = (event) =>{
    event.preventDefault();
    UserPool.signUp(email,password,attributeList,null,(err,data) => {
      if(err){
        console.log(err)
      }
      console.log('ooo',data,);
    })
  }

  return(
     <>
       <form>
         <label htmlFor='email'>Email</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)}/>

         <label htmlFor='family_name'>Family Name</label>
         <input value={name} onChange={(e) => setName(e.target.value)}/>

         <label htmlFor='given_name'>Given name</label>
         <input value={given_name} onChange={(e) => setGivenName(e.target.value)}/>

         <label htmlFor='password'>Password</label>
         <input value={password} onChange={(e) => setPassword(e.target.value)}/>

         <button type='submit' onClick={(e) => submit(e)}>Sign up</button>
       </form>
       <p>CONFIRMATION PART</p>
       <ConfirmRegister/>
     </>
  )
}

export default SignUp;
