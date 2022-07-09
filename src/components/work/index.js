

import React from 'react';
import './style.js';
import data from '../data.json';
import { Partdesc, Particon, Partline, Parttitle, Titlespan, Workpart, Worksection, Worktitle } from './style.js';

function Work() {
      const workdata = data;
      return (
            <Worksection>
                  <div className='container'>
                        <Worktitle><Titlespan>My</Titlespan>Work</Worktitle>
                        {
                              workdata.works.map(work => {
                                    return (
                                          <Workpart key={work.id}  >
                                                <Particon className={work.iconname}></Particon>
                                                <Parttitle>{work.title}</Parttitle>
                                                <Partline />
                                                <Partdesc>{work.body}</Partdesc>
                                          </Workpart>
                                    )
                              })

                        }
                  </div>
            </Worksection>
      )



}

export default Work;