import React from 'react';
import './navbar.scss';

export const Navbar = () => {
    return (

        <div className="navbar">

        <a rel={'external'} href="/" ><div className="home">AlphaGrad</div></a>
        <div className="right">

            <a rel={'external'} href="/questions" ><div className="item">EXPLORE</div></a>


            <a rel={'external'} href="/contact" ><div className="item">CONTACT</div></a>
            <a rel={'external'} href="/team" ><div className="item">TEAM</div></a>





        </div>


    </div>
    )
}

export default Navbar;
