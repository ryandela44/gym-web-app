import React, {useState} from "react";
import {Link} from "react-router-dom";

function Header() {
return <header>
    <nav className={"navbar"}>
        <div className={"navbar-container"}>
            <Link to='/' className='navbar-logo'></Link>
        </div>
    </nav>
    <h1>Gym Mate</h1>
</header>
}

export default Header