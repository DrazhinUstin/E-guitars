import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpBtn = () => {
    const [isBtnShowUp, setIsBtnShowUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > window.innerHeight) {
                setIsBtnShowUp(true);
            } else {
                setIsBtnShowUp(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`scroll-up-btn ${isBtnShowUp && 'show'}`}
            onClick={() => window.scrollTo(0, 0)}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollUpBtn;
