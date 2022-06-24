import React from 'react';
import '../css/Navbar.css'

function Navbar(props) {
    const { toggleMode } = props;
    return (
        <>
            <nav className="nav">
                <ul className="list">
                <h1><i className="fab fa-bitcoin"></i>  Crypto-Track</h1>
                <li className='list-item'>
                    <a className='link' href="/news">Crypto News</a>
                </li>
                {/* <h1><i className="fab fa-bitcoin"></i>  Crypto-Track</h1> */}
                    {/* <li className="list-item">Home</li>
                    <li>About</li>
                    <li>Contact</li> */}
                </ul>
                    <button className="mode" onClick={toggleMode}>Dark/Light Mode</button>
            </nav>
        </>
    )
}

export default Navbar
