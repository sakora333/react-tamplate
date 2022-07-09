

import React from 'react';
import './style.css';
import data from "../data.json";

function Socialmedia() {
    const socialdata = data;
    return (
        <div class="social-media">
            {
                socialdata.media.map(social => {
                    return (
                        <div className={social.classname} key={social.id}>
                            <i className={social.mediaicon}></i>
                            <p>
                                <span className="info1">{social.action}</span>
                                <span className="info2">{social.socialname}</span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Socialmedia;