import React from 'react';

const Footer = () => {
    return (
        <footer>
      <div className="container">
          <nav className="menu">
            <a href="#OurStory">Our Story</a>
            <a href="#SpecialMenu">Special Menu</a>
            <a href="#Reviews">Reviews</a>
            <a href="#ContactUs">Contact Us</a>
          </nav>

          <ul className="social-media">
              <li>
                <a href="http://www.facebook.com" target="new">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com" target="new">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://instagram.com" target="new">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://pintrest.com" target="new">
                  <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                </a>
              </li>
          </ul>

          <div className="copyright">
          © 2019 Copyright <br/> This site was happily made by Chasity De La Cruz
          </div>
          
        </div>
    </footer>
    )
}

export default Footer;
