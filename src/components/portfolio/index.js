

import React from 'react';
import './style.css';
import data from '../data.json';

function Portfolio() {
    const portfoliodata = data;
    return (

        <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>

            <div className="box">
                {
                    portfoliodata.portfolio.map(porto => {
                        return (
                            <div key={porto.id}>
                                <img src={porto.imgsrc} alt="" />
                                <p className="overlay">
                                    <span>
                                        {porto.span}
                                    </span>
                                </p>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
}

export default Portfolio;