import React, { useState, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyBtn = ({ clipText }) => {
    const [isTextCopied, setIsTextCopied] = useState(false);

    useEffect(() => {
        if (isTextCopied) {
            const timerID = setTimeout(() => setIsTextCopied(false), 2500);
            return () => clearTimeout(timerID);
        }
    }, [isTextCopied]);

    const handleClick = () => {
        navigator.clipboard
            .writeText(clipText)
            .then(() => setIsTextCopied(true))
            .catch((error) => console.log(error));
    };

    return (
        <button
            className={`copy-btn ${isTextCopied && 'copied'}`}
            disabled={isTextCopied}
            onClick={handleClick}
        >
            <FaCopy />
        </button>
    );
};

export default CopyBtn;
