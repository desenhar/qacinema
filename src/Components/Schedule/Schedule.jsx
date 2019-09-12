import React from 'react';

const Schedule = () => {
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
                    <tr>
                        <th>Days</th>
                        <th>Opening hours</th>
                    </tr>
                    <tr>
                        <td>Monday - Thursday</td>
                        <td>11:00 - 00:00</td>
                    </tr>
                    <tr>
                        <td>Friday - Saturday</td>
                        <td>11:00 - 02:00</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11:00 - 23:00</td>
                    </tr>
                </table>
            </div>
        </body>
    );
}

export default Schedule;