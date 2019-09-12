import React, { useState } from "react";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SignUp = () => {
  // Can now use startDate as a the DOB variable
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    alert('Submitted');
  }

  return (
    <div className="container">
      <img
        width="100%"
        src={require("../../images/Locations.jpg")}
        alt="QA Cinemas"
      />

      <form class="form-horizontal" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label class="col-sm-2">Title:</label>
          <div class="col-sm-10">
            <select class="form-control">
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss.</option>
              <option>Ms.</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2">First Name:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="Enter first name"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-10">Last Name:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="Enter last name"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" placeholder="Email"/>
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
            <input type="number" class="form-control" placeholder="Enter phone number"/>
          </div>
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
