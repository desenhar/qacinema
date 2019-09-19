import React, { useState } from "react";
import axios from 'axios';

const FILMSURL = 'http://localhost:80/allFilms';
const BOOKINGSURL = 'http://localhost:80/makeBooking';

const Bookings = () => {
    const [film, setFilm] = useState(``);
    const [films, setFilms] = useState([]);
    const [times, setTimes] = useState([]);

    const filmsOptions = async () => {
        // Grabs films from the FILMSURL
        // Same function can be found in Schedule.jsx (under a different name)
        // Should contruct options tags containing films and setFilms() to this array
        setFilms([]);
    };

    const timeOptions = async (film) => {
        // Sees which film is currently selected on the dropdown (defined by state film)
        // Queries FILMSURL to find the showing times for this film, and constructs opetions tags from this
        // Store these HTML arrays using setTimes()
        setTimes([]);
    };

    // Function called when form is submitted, very similar to SignUp.jsx
    const submitBooking = async event => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Construct booking item to go into DB
        const item = {};

        // Post data to /makeBooking

    }

    return(
        <div className="container">
            Should contain;
            - Form with two dropdowns (as well as other required information from bookings model)
            - One dropdown for the films, with options defined through {films}
            - Once a film is selected from the dropdown, setFilm to be this film (will have to google how to detect dropdown selection)
            - Another dropdown showing the timings for this film, and defined options through {times}
            - Submit button and other fields yadda yadda
        </div>
)};

export default Bookings;