import React, { useState } from "react";
import axios from 'axios';

const FILMSURL = 'http://localhost:80/allFilms';
const BOOKINGSURL = 'http://localhost:80/makeBooking';
const SINGLEFILMURL = 'http://localhost:80/singleFilm/';

const Bookings = () => {
    const [film, setFilm] = useState(``);
    const [films, setFilms] = useState([]);
    const [times, setTimes] = useState([]);

    const filmsOptions = async () => {
        // Grabs films from the FILMSURL
        // Same function can be found in Schedule.jsx (under a different name)
        // Should contruct options tags containing films and setFilms() to this array
        const res = await axios.get(FILMSURL); // access allFilms URL
        const films = await res.data; // get allFilms data
        const filmshtml = films.map(
            item => <option id={item["_id"]} ref={item["title"]}>
            {item["title"]}</option> // map to html
        );
        setFilms(filmshtml); // update state
    };

    const timeOptions = async (film) => {
        // Sees which film is currently selected on the dropdown (defined by state film)
        // Queries FILMSURL to find the showing times for this film, and constructs opetions tags from this
        // Store these HTML arrays using setTimes()
        const id = this.refs.film; // get id of user selected film
        const res = await axios.get(SINGLEFILMURL+id); // get film data from singleFilms
        const times = await res.data["showingTimes"]; // get times array
        const timeshtml = times.map(
            item => <option>{item}</option> // map to html
        )
        setTimes(timeshtml); // update state
    };

    // Function called when form is submitted, very similar to SignUp.jsx
    const submitBooking = async event => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Construct booking item to go into DB
        const item = {};

        // Post data to /makeBooking

    }

    // Call to functions to update states from the json-server
    if (films.length===0 ){
        filmsOptions();
    }

    return(
        <div className="container">
            Should contain;
            - Form with two dropdowns (as well as other required information from bookings model)
            - One dropdown for the films, with options defined through {films}
            - Once a film is selected from the dropdown, setFilm to be this film (will have to google how to detect dropdown selection)
            - Another dropdown showing the timings for this film, and defined options through {times}
            - Submit button and other fields yadda yadda

            <form className="form-horizontal" onSubmit={submitBooking}>
                <div className="form-group">
                    <label className="col-sm-2">Film: *</label>
                    <div className="col-sm-10">
                        <select name="filmid" id="filmid" className="form-control">
                        {films}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2">Booking date: *</label>
                    <div className="col-sm-10">
                        <select name="bookingDate" id="bookingDate" className="form-control">
                        {times}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2">Email: *</label>
                    <div className="col-sm-10">
                        <input name="email" id="email" className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2"># of adults: *</label>
                    <div className="col-sm-10">
                        <input name="adults" id="adults" className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2"># of child: *</label>
                    <div className="col-sm-10">
                        <input name="child" id="child" className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">    
                    <label className="col-sm-2"># of concessions: *</label>
                    <div className="col-sm-10">
                        <input name="concessions" id="concessions" className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
)};

export default Bookings;