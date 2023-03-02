import React, { useState } from "react";
import './App.css';
import Dark from "./Dark";
import Validation from "./validation";
const Form = () => {

  const [input, Setinput] = useState({
    Username: "",
    Email: "",
    Password: "",
    MatchedPassword: ""

  })




  let [show1, Setshow1] = useState(false);
  let [show2, Setshow2] = useState(false);
  let [show3, Setshow3] = useState(false);
  let [show4, Setshow4] = useState(false);




  let [error, Seterror] = useState({});

  let handleSubmit = (event) => {
    event.preventDefault();
    Seterror(Validation({ input }));
    Setinput({
      Username: "",
      Email: "",
      Password: "",
      MatchedPassword: ""
    })
    

  }

  let handleChange = (event) => {
    let { value, name } = event.target;
    let prev = { ...input, [name]: value };
    Setinput(prev);

  }


  return (
    <>


      <div className="  d-flex justify-content-center align-item-center m-5">
        <div className="col-md-3 bg-color p-3 m-3 ">
          <div className="Heading text-center">
            <h3> Welcome {input.Username}</h3>
          </div>
          <div className="text-center   ">
            <form action="" className="from-group" onSubmit={handleSubmit}>
              <div className="m-2 " >
                <label className="color  fs-5" htmlFor="">Username</label><br />
                <input style={{ backgroundColor: show1 ? "#05c46b" : " " }} className="form-control input-bg  m-1 off" type="text" value={input.Username} name="Username" id="" placeholder="Enter UserName" onChange={handleChange} onMouseOver={() => { Setshow1(true) }} onMouseOut={() => { Setshow1(false) }} />
                {error.Username && <small>{error.Username}</small>}
              </div>
              <div className="m-2">
                <label htmlFor="" className=" color  fs-5">Email</label><br />
                <input style={{ backgroundColor: show2 ? "#05c46b" : " " }} className="form-control input-bg  m-1 off" type="text" value={input.Email} name="Email" id="" placeholder="Enter Email" onChange={handleChange} onMouseOver={() => { Setshow2(true) }} onMouseOut={() => { Setshow2(false) }} />
                {error.Email && <small>{error.Email}</small>}
              </div>
              <div className="m-2 ">
                <label className="  color fs-5" htmlFor="">Password</label><br />
                <input style={{ backgroundColor: show3 ? "#05c46b" : " " }} className="form-control input-bg  m-1 off" type="password" value={input.Password} name="Password" id="" placeholder="Enter Password" onChange={handleChange} onMouseOver={() => { Setshow3(true) }} onMouseOut={() => { Setshow3(false) }} />
                {error.Password && <small>{error.Password}</small>}
              </div>
              <label htmlFor="" className="color fs-5">MatchedPassword</label><br />
              <input style={{ backgroundColor: show4 ? "#05c46b" : "" }} type="password" name="MatchedPassword" id="" className="form-control input-bg  m-1 off" value={input.MatchedPassword} onChange={handleChange} placeholder="Confirm Password" onMouseOver={() => { Setshow4(true) }} onMouseOut={() => { Setshow4(false) }} />
              {error.MatchedPassword && <small>{error.MatchedPassword}</small>}
              <div>
                <button className=" btn  btn-color btn-sm  w-30 m-3  " >Login</button>
              </div>
            </form>
            <Dark ></Dark>
          </div>


        </div>
      </div>
    </>

  )

}
export default Form;