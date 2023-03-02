import React from "react";
import "./App.css";



function Validation({input}){
    const email_pattern=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const password_pattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

     let faults={
        Username: "",
        Email: "",
        Password: "",
        MatchedPassword: ""
     };

     if(input.Username===""){
        faults.Username="Name is Required "
     }
     
     if(input.Email===""){
        faults.Email="Email is Required"
     }
     else if(!email_pattern.test(input.Email)){
        faults.Email="email must contain aphanumber & special Character "
     }
        
     if(input.Password===""){
        faults.Password="Password is required"
     }
     else if (!password_pattern.test(input.Password)){
        faults.Password="Password contains , at least one letter & special Char & Number "
     }
     if(input. MatchedPassword===""){
       faults.MatchedPassword="Confirm Password Required"
     }
     else if(input.MatchedPassword!==input.Password){
            faults.MatchedPassword="Password does not match"
     }

     return faults;
       
     
     
}




export default Validation