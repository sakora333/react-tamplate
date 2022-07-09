

import React from 'react';
import { Anchor, Listitem, Logo, Logotext, Navbarsection, Ullist } from './style.js';

function Navbar() {
    return (

        <Navbarsection>

            <div className="container">

                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>

                <Ullist>
                    <Listitem><Anchor href='/'>Home</Anchor></Listitem>
                    <Listitem><Anchor href='#'>Work</Anchor></Listitem>
                    <Listitem><Anchor href='#'>Portfolio</Anchor></Listitem>
                    <Listitem><Anchor href='#'>Resume</Anchor></Listitem>
                    <Listitem><Anchor href='#'>About</Anchor></Listitem>
                    <Listitem><Anchor href='contact'>Contact</Anchor></Listitem>
                </Ullist>

            </div>

        </Navbarsection>
    );
}

export default Navbar;