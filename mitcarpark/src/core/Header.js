import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import mitlogo from "./mitlogo.jpg";

const Header = (props) => {
    return (
        <div className={`header-container ${props.rootClassName} `}>
            <img src={mitlogo} className="App-logo" alt="logo" style={{ width: 220, height: 141 }}/>
            <h1 className="header-text1" >
                <span className="Heading">Parking Area Management System</span>
                <br></br>
            </h1>
            <div className="header-container2">
                <a href='/signin'><button className='header-button'>Signin</button></a>
                <a href='/signup'><button className='header-button'>Register</button></a>
            </div>
        </div>
    )
}


Header.propTypes = {
    rootClassName: PropTypes.string,
    image_src: PropTypes.string,
    image_alt: PropTypes.string,
}

export default Header;
