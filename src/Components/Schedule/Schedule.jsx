import React from 'react';
import mockdata from '../../data/cinemamockdata';


const Schedule = () => {
    const openingtimes = mockdata["openingTimes"].map(
        day => <tr>
            <td>{day["day"]}</td>
            <td>{day["opening"]}</td>
            <td>{day["close"]}</td>
        </tr>
    )
    const films = mockdata["allFilms"].map(
        title => <tr>
            <td>{title["title"]}</td>
            <td>{title["showingTimes"]}</td>
            <td><img src={'../../images/' + title["img"]} alt={title["img"]} /></td>
        </tr>
    )
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
                    {openingtimes}
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