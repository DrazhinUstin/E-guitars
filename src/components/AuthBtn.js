import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

const AuthBtn = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return !isAuthenticated ? (
        <button className='navbar-menu-auth-btn' onClick={loginWithRedirect}>
            login
            <FaUserPlus />
        </button>
    ) : (
        <button
            className='navbar-menu-auth-btn'
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            logout
            <FaUserMinus />
        </button>
    );
};

export default AuthBtn;
