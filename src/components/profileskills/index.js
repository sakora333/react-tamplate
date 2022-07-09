
import React from 'react';
import data from '../data.json';
import './style.css';

function Profileskills() {
    const profiledata = data;
    const skillsdata = data;
    return (
        <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        {
                            profiledata.profile.map(profile => {
                                return (
                                    <li class="profile-item" key={profile.id}>
                                        <span>{profile.span}</span>
                                        {profile.litext}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {
                        skillsdata.skills.map(skill => {
                            return (
                                <div class="bar" key={skill.id}>
                                    <span class="title">{skill.skillname}</span>
                                    <span class="perc">{skill.percentage}</span>
                                    <div class="parent">
                                        <span class={skill.class}></span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Profileskills;