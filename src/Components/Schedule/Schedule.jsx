import React, { useState } from 'react';

import axios from 'axios';

const FILMSURL = 'http://localhost:80/allFilms';
const OPENINGURL = 'http://localhost:80/openingTimes';

const Schedule = () => {
    const [films, setFilms] = useState([]);
    const [times, setTimes] = useState([]);

    const allFilms = async () => {
        // Grab the data from the localhost (would ideally have error checking)
        const filmdata = await axios.get(FILMSURL);
        // Get the JSON from this data package
        const filmlist = filmdata.data;
        // Map each JSON element to it's HTML counter-part
        const filmhtml = filmlist.map(
            title => <tr>
                <td>{title["title"]}</td>
                <td>{title["showingTimes"]}</td>
                <td><img src={'../../images/' + title["img"]} alt={title["img"]} /></td>
            </tr>)
        // Update the state to include these HTML elements
        setFilms(filmhtml);
    }

    const openingTimes = async () => {
        const openingdata = await axios.get(OPENINGURL);
        const openinglist = openingdata.data;
        const openinghtml = openinglist.map(
            day => <tr>
                <td>{day["day"]}</td>
                <td>{day["opening"]}</td>
                <td>{day["close"]}</td>
            </tr>)
        setTimes(openinghtml);
    }

    // Call to functions to update states from the json-server
    allFilms();
    openingTimes();

    return (
        <body>
            <div className="container">
                <img width="100%" src={require(
                    "../../images/popcorn.jpeg")} alt="popcorn" />
            </div>
            <br></br>
            <h1 class="text-center">Opening hours</h1>
            <br></br>
            <div class="container">
                <table class="table table-bordered">
                    <th>
                        Days
                    </th>
                    <th>
                        Open
                    </th>
                    <th>
                        Close
                    </th>
                    {times}
                </table>
            </div>
            <br></br>
            <h1 class="text-center">What's on</h1>
            <br></br>
            <div class="container">
                <table class="table table-bordered">
                    <br></br>
                    <th class="display-5">
                        Showtimes
                    </th>
                    <th></th>
                    {films}
                </table>
            </div>
        </body>
    );
}

export default Schedule;