import React from 'react';
import { CONTENTARTICLETEXT } from '../../js/constants/contentArticleText';
import { HOMEARTICLEINFO } from '../../js/constants/contentArticleText';
import { HOMEIMAGES } from '../../js/constants/homeImage';

const Home = () => {
    return (
        <div className="container">
            <img width="100%" src={require('../../'+HOMEIMAGES[0].src)} alt={HOMEIMAGES[0].alt}/>

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">Welcome to QA Cinemas</h4>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Bringing the biggest blockbusters to you.</h6>
                    <hr></hr>
                    <br></br>
                    <p className="mb-2 text-muted">
                        {HOMEARTICLEINFO[0].title}
                        </p>
                        {CONTENTARTICLETEXT}
                        {/* QA Cinemas was founded by the SquadJS in 1956 and inaugarated by The Queen in the same year.
                    In the decades since, we have been committed to delivering the ultimate cinema experience by bringing you
                    the latest blockbusters. QA cinemas exude style and glamour just as the founding fathers had envisioned.
                    Back then, in the days of post-war austerity, cinemas were gloomy, dull and drab establishments. QA Cinemas changed all that with
                    its first flagship branch at Tower Bridge. */}
                    <br></br>
                    <hr></hr>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <img width="100%" src={require('../../'+HOMEIMAGES[1].src)} alt={HOMEIMAGES[1].alt}/>
                </div>
                <div className="col-sm">
                    <img width="100%" src={require('../../'+HOMEIMAGES[2].src)} alt={HOMEIMAGES[2].alt}/>
                </div>
                <div className="col-sm">
                    <img width="100%" src={require('../../'+HOMEIMAGES[1].src)} alt={HOMEIMAGES[1].alt}/>
                </div>
            </div>

            <div className="card">
                <div className="card-body"> 
                    <p className="mb-2 text-muted">
                        <br></br>
                        {HOMEARTICLEINFO[1].title}
                    </p>
                    <p>
                    </p>
                    {CONTENTARTICLETEXT}

                </div>
            </div>
        </div>
    );
}

export default Home;
