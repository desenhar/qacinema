import React, { useState } from "react";
import axios from 'axios';

const FILMSURL = 'http://localhost:4000/allFilms';
const BOOKINGSURL = 'http://localhost:4000/makeBooking';
const SINGLEFILMURL = 'http://localhost:4000/singleFilm/';

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
        console.log(films);
        const filmshtml = films.map(
            item => <option id={item["_id"]} value={item["title"]}>
            {item["title"]}</option> // map to html
        );
        setFilms(filmshtml); // update state
    };

    const timeOptions = async () => {
        // Sees which film is currently selected on the dropdown (defined by state film)
        // Queries FILMSURL to find the showing times for this film, and constructs opetions tags from this
        // Store these HTML arrays using setTimes()

            
        //const res = await axios.get(SINGLEFILMURL); // get film data from singleFilms
        //const times = await res.data["showingTimes"]; // get times array
        const times = ["11:45", "13:30", "17:15", "20:45"]
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
        const item = {
            "filmId" : data.get('filmId'),
            "email" : data.get('email'),
            "adults" : data.get('adults'),
            "child" : data.get('child'),
            "concessions" : data.get('concessions')
        };

        console.log(item);
        // Post data to /makeBooking
        try{
            await axios.post(BOOKINGSURL, item);
          }catch(e){
            alert(e);
          }

    }

    // Call to functions to update states from the json-server
    if (films.length===0 ){
        filmsOptions();
    }

    if (times.length===0){
        timeOptions();
    }

    return(
        <div className="container">
            <form className="form-horizontal" onSubmit={submitBooking}>
                <div className="form-group">
                    <label className="col-sm-2">Film: *</label>
                    <div className="col-sm-10">
                        <select defaultValue={film} onChange={timeOptions} name="filmid" id="filmid" className="form-control">
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