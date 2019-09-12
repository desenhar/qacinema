import React from 'react';

const Schedule = () => {
    return (
        <body>
            <div className="container">
                <img width="100%" src={require(
                    "../../images/popcorn.jpeg")} alt="QA Cinemas" />
            </div>
            <h1>Opening hours</h1>
            <div class="container">
                <table>
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