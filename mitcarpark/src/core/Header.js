import React from 'react';
import './header.css';
import mitlogo from "./mitlogo.jpg";

const Header = () => {
    return (
        <div className={`header-container`}>
            <img src={mitlogo} className="App-logo" alt="logo" style={{ width:"20%", height: "20%" }} />
            <div className="heading padding"  style={{ width:"80%", height: 141 }}>
                <h1 className="header-text1" >
                    <span className="Heading">Parking Area Management System</span>
                    <br></br>
                </h1>
            </div>
        </div>
    )
}

export default Header;
