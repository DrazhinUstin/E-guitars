import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButtons = ({ amount, toggleAmount }) => {
    return (
        <div className='amount-btns'>
            <button onClick={() => toggleAmount('decrease')}>
                <FaMinus />
            </button>
            <p>{amount}</p>
            <button onClick={() => toggleAmount('increase')}>
                <FaPlus />
            </button>
        </div>
    );
};

export default AmountButtons;
