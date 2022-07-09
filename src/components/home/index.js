

import React from 'react';
import { Homebtn, Homedesc, Homeinfo, Homeinformation, Homesection, Homespan, Hometitle } from './style.js';

function Home() {
    return (
        <Homesection>
            <div className="container">
                <Homeinformation>
                    <Hometitle>Hamza Nabil</Hometitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <Homedesc>
                        Iam a professional <Homespan>UX Designer</Homespan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </Homedesc>
                    <Homebtn className="home-btn">Let's Begin</Homebtn>
                </Homeinformation>
            </div>
        </Homesection>
    );
}

export default Home;