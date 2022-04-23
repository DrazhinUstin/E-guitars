import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='section-center'>
                <div className='footer-menu'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <ul className='footer-menu-links'>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='products'>products</Link>
                        </li>
                        <li>
                            <Link to='about'>about</Link>
                        </li>
                    </ul>
                    <div className='footer-menu-icons'>
                        <a
                            href='https://github.com/DrazhinUstin/E-Commerse_React'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>&copy; {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
