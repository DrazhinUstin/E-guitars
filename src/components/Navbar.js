import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const Navbar = () => {
    const { totalAmount } = useCartContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const menuLinks = navbarRef.current.querySelectorAll('ul a');
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            menuLinks.forEach((link, index) => {
                link.style.animation = `scaling 0.4s ease ${0.25 + index / 2}s forwards`;
            });
        } else {
            document.body.style.overflow = '';
            menuLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const navbar = navbarRef.current;
        const handleClick = (e) => {
            if (!e.target.closest('a')) return;
            setIsMenuOpen(false);
        };
        navbar.addEventListener('click', handleClick);
        return () => navbar.removeEventListener('click', handleClick);
    }, []);

    return (
        <nav className='navbar'>
            <div className='navbar-container section-center' ref={navbarRef}>
                <header className='navbar-header'>
                    <Link to='/'>
                        <h1 className='navbar-header-logo'>logotype</h1>
                    </Link>
                    <button
                        className={`navbar-header-toggle-btn ${isMenuOpen && 'active'}`}
                        onClick={() => setIsMenuOpen((oldState) => !oldState)}
                    >
                        <span></span>
                    </button>
                </header>
                <div className={`navbar-menu ${isMenuOpen && 'active'}`}>
                    <div></div>
                    <ul className='navbar-menu-links'>
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
                    <div className='navbar-menu-btns'>
                        <button className='navbar-menu-auth-btn'>
                            login
                            <FaUserPlus />
                        </button>
                        <Link to='cart' className='navbar-menu-cart-btn'>
                            <FaShoppingCart />
                            <span>{totalAmount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
