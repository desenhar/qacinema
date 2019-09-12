import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <img width="100%" src={require(
                "../../images/Locations.jpg")} alt="QA Cinemas"/>

            <div className="card">
                <div className="card-body text-center"> 
                    <h4 class="card-title text-center">Welcome</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Welcome to QA Cinemas.</h6>
                    <p class="mb-2 text-muted text-center">Bringing the biggest blockbusters to you.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm">
                    <img width="100%" src={require(
                    "../../images/InternationalHouse.jpeg")} alt="QA Cinemas"/>
                </div>
                <div class="col-sm">
                    <img width="100%" src={require(
                    "../../images/InternationalHouse2.jpeg")} alt="QA Cinemas"/>
                </div>
                <div class="col-sm">
                    <img width="100%" src={require(
                    "../../images/InternationalHouse.jpeg")} alt="QA Cinemas"/>
                </div>
            </div>
        </div>
    );
}

export default Home;