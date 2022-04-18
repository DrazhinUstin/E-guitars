import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { heroData as slides } from '../utils/data';

const HeroSlider = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timerId = setTimeout(() => switchSlide('next'), 5000);
        return () => clearTimeout(timerId);
    }, [step]);

    const switchSlide = (keyWord) => {
        setStep((oldStep) => {
            keyWord === 'next' ? oldStep++ : oldStep--;
            if (oldStep > slides.length - 1) oldStep = 0;
            if (oldStep < 0) oldStep = slides.length - 1;
            return oldStep;
        });
    };

    return (
        <section className='hero-slider'>
            {slides.map(({ id, image, title }, index) => {
                return (
                    <article key={id} className={`slide ${index === step && 'active'}`}>
                        <img src={image} alt={title} className='slide-image' />
                        <div className='slide-content'>
                            <h2>{title}</h2>
                            <Link to='products' className='btn'>
                                shop now
                            </Link>
                        </div>
                    </article>
                );
            })}
            <div className='hero-slider-controls'>
                <button onClick={() => switchSlide('prev')}>
                    <FaChevronLeft />
                </button>
                <button onClick={() => switchSlide('next')}>
                    <FaChevronRight />
                </button>
            </div>
            <div className='hero-slider-stages'>
                {slides.map((_, index) => {
                    return (
                        <span
                            key={index}
                            className={index === step ? 'active' : ''}
                            onClick={() => setStep(index)}
                        ></span>
                    );
                })}
            </div>
        </section>
    );
};

export default HeroSlider;
