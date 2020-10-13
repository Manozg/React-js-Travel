import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faFacebook, faTwitter, faGoogle,} from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
        <React.Fragment>
        <footer className="footer">
            <div>

                <h3 className="footer-text">Find us on Social Media</h3>
                    <NavLink className="btn-google btn-social" to="/http://google.com/"><FontAwesomeIcon icon={faGoogle} size="2x"/></NavLink>{' '}
                    <NavLink className="btn-facebook btn-social" to="/http://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></NavLink>{' '}
                    <NavLink className="btn-twitter btn-social" to="/http://twitter.com/"><FontAwesomeIcon icon={faTwitter}  size="2x"/></NavLink>{' '}
                    <NavLink className="btn-youtube btn-social" to="/http://youtube.com/"><FontAwesomeIcon icon={faYoutube}  size="2x"/></NavLink> 
            </div>

        </footer>
        </React.Fragment>
    )
}

export default Footer;