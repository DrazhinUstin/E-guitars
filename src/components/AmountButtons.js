import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButtons = ({ stock }) => {
    const [amount, setAmount] = useState(1);

    const decreaseAmount = () => {
        setAmount((amount) => {
            amount = amount - 1;
            if (amount < 1) amount = 1;
            return amount;
        });
    };

    const increaseAmount = () => {
        setAmount((amount) => {
            amount = amount + 1;
            if (amount > stock) amount = stock;
            return amount;
        });
    };

    return (
        <div className='amount-btns'>
            <button onClick={decreaseAmount}>
                <FaMinus />
            </button>
            <p>{amount}</p>
            <button onClick={increaseAmount}>
                <FaPlus />
            </button>
        </div>
    );
};

export default AmountButtons;
