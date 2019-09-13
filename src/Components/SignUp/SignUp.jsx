import React, { useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SIGNUPURL = 'http://localhost:80/signup';

const SignUp = () => {
  // Can now use startDate as a the DOB variable
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async event => {
    alert('Submitted');
    event.preventDefault();
    const data = new FormData(event.target);

    const title = data.get('title');
    const fn = data.get('firstname');
    const ln = data.get('lastname');
    const email = data.get('email');
    const number = data.get('number');
    const gender = data.get('gender')
    const dob = startDate;

    console.log(title);
    console.log(fn);
    console.log(ln);
    console.log(email);
    console.log(number);
    console.log(dob);

    const item = {
      'id' : Math.floor(Math.random()*1000), // Not sustainable
      'title' : title,
      'firstname' : fn,
      'lastname' : ln,
      'email' : email,
      'number' : number,
      'dob' : dob,
      'gender' : gender
    }

    try{
      await axios.post(SIGNUPURL, item);
    }catch(e){
      alert(e);
    }
  }

  return (
    <div className="container">
      <img
        width="100%"
        src={require("../../images/signup.jpg")}
        alt="QA Cinemas"
      />

      <form class="form-horizontal" onSubmit={handleSubmit}>
        <div class="form-group">
          <label class="col-sm-2">Title: *</label>
          <div class="col-sm-10">
            <select name="title" id="title" class="form-control">
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss.</option>
              <option>Ms.</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2">First Name: *</label>
          <div class="col-sm-10">
            <input name="firstname" id="firstname" type="text" class="form-control" placeholder="Enter first name"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-10">Last Name: *</label>
          <div class="col-sm-10">
            <input name="lastname" id="lastname" type="text" class="form-control" placeholder="Enter last name"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Email *</label>
          <div class="col-sm-10">
            <input name="email" id="email" type="email" class="form-control" placeholder="Email"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2">Date of Birth</label>
          <div class="col-sm-10">
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2">Phone number:</label>
          <div class="col-sm-10">
            <input name="number" id="number" type="number" class="form-control" placeholder="Enter phone number"/>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label" for="huey">Male</label>
          <input type="radio" id="male" name="gender" value="Male" />
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="huey">Female</label>
          <input type="radio" id="female" name="gender" value="Female" />
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Sign up</button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default SignUp;
