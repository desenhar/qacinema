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
            title => <tr key={title["_id"]}>
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
            day => <tr key={day["_id"]}>
                <td>{day["day"]}</td>
                <td>{day["opening"]}</td>
                <td>{day["close"]}</td>
            </tr>)
        setTimes(openinghtml);
    }

    // Call to functions to update states from the json-server
    if (films.length===0 && times.length===0){
      allFilms();
      openingTimes();
    }

    return (
        <>
            <div className="container">
                <img width="100%" src={require(
                    "../../images/popcorn.jpeg")} alt="popcorn" />
            </div>
            <br></br>
            <h1 className="text-center">Opening hours</h1>
            <br></br>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                      <tr>
                      <th>
                          Days
                      </th>
                      <th>
                          Open
                      </th>
                      <th>
                          Close
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      {times}
                    </tbody>
                </table>
            </div>
            <br></br>
            <h1 className="text-center">What's on</h1>
            <br></br>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="display-5">
                            Showtimes
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {films}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Schedule;
