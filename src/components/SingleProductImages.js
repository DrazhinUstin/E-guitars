import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const SingleProductImages = ({ images, title }) => {
    const [step, setStep] = useState(0);

    const switchImage = (key) => {
        setStep((step) => {
            key === 'next' ? step++ : step--;
            if (step > images.length - 1) step = 0;
            if (step < 0) step = images.length - 1;
            return step;
        });
    };

    return (
        <div className='single-product-images'>
            <div>
                <img src={images[step]} alt={title} />
                <div className='controls'>
                    <button onClick={() => switchImage('prev')}>
                        <FaChevronCircleLeft />
                    </button>
                    <button onClick={() => switchImage('next')}>
                        <FaChevronCircleRight />
                    </button>
                </div>
            </div>
            <div>
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt={title}
                            className={index === step ? 'active' : ''}
                            onClick={() => setStep(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SingleProductImages;
