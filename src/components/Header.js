import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                <h3 className="logo-header">BUCKHEAD GROUP</h3>
                <div>
                    <h5 className="logo-text">FINE SKEAKHOUSE</h5>
                </div>
                </div>
                <nav>
                    <a href="#OurStory">Our Story</a>
                    <a href="#SpecialMenu">Menu</a>
                    <a href="#Reviews">Reviews</a>
                    <a href="#ContactUs">Contact Us</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
