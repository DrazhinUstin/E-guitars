import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductsGrid from './ProductsGrid';

const Slider = ({ products }) => {
    const [step, setStep] = useState(0);
    const [slidesFit, setSlidesFit] = useState(1);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [xDiff, setXDiff] = useState(0);
    const sliderRef = useRef(null);

    const switchSlide = (keyword) => {
        setStep((step) => {
            if (keyword === 'next') step++;
            if (keyword === 'prev') step--;
            if (step > products.length - slidesFit) step = 0;
            if (step < 0) step = products.length - slidesFit;
            const slideWidth = sliderRef.current.querySelector('article').offsetWidth;
            displayTranslate(slideWidth * step);
            setCurrentTranslate(slideWidth * step);
            return step;
        });
    };

    const displayTranslate = (translate) => {
        sliderRef.current.style.transform = `translateX(${-translate}px)`;
    };

    const getClientX = (e) => e.clientX || e.touches[0].clientX;

    const startSwipe = (e) => {
        setIsDragging(true);
        setStartX(getClientX(e));
    };

    const moveSwipe = (e) => {
        if (!isDragging) return;
        const endX = getClientX(e);
        displayTranslate(currentTranslate + startX - endX);
        setXDiff(startX - endX);
    };

    const endSwipe = () => {
        if (!isDragging) return;
        if (xDiff > 100) switchSlide('next');
        else if (xDiff < -100) switchSlide('prev');
        else switchSlide();
        setIsDragging(false);
        setXDiff(0);
    };

    useEffect(() => {
        const handleResize = () => {
            const slider = sliderRef.current;
            const sliderWidth = slider.offsetWidth;
            const slideWidth = slider.querySelector('article').offsetWidth;
            setSlidesFit(Math.round(sliderWidth / slideWidth));
            switchSlide();
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [slidesFit]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className='slider'>
                <div
                    ref={sliderRef}
                    onDragStart={(e) => e.preventDefault()}
                    onMouseDown={startSwipe}
                    onMouseMove={moveSwipe}
                    onMouseUp={endSwipe}
                    onMouseLeave={endSwipe}
                    onTouchStart={startSwipe}
                    onTouchMove={moveSwipe}
                    onTouchEnd={endSwipe}
                >
                    <ProductsGrid products={products} />
                </div>
                <div className='slider-controls'>
                    <button onClick={() => switchSlide('prev')}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={() => switchSlide('next')}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className='slider-stages'>
                {products.slice(slidesFit - 1).map((_, index) => {
                    return (
                        <span
                            key={index}
                            className={index === step ? 'active' : ''}
                            onClick={() => {
                                setStep(index);
                                switchSlide();
                            }}
                        ></span>
                    );
                })}
            </div>
        </>
    );
};

export default Slider;
