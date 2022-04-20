import React, { useRef, useEffect } from 'react';
import { defineElemHeight } from '../utils/helpers';

const Accordion = ({ data }) => {
    const accordionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            [...accordionRef.current.children].forEach((elem) => {
                if (!elem.classList.contains('active')) return;
                elem.lastElementChild.style.height = defineElemHeight(elem.lastElementChild);
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (e) => {
        const target = e.currentTarget;
        const sibling = target.nextElementSibling;
        const parent = target.parentElement;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
            sibling.style.height = defineElemHeight(sibling);
        } else {
            parent.classList.remove('active');
            sibling.style.height = '';
        }
        [...accordionRef.current.children].forEach((elem) => {
            if (elem === parent) return;
            elem.classList.remove('active');
            elem.lastElementChild.style.height = '';
        });
    };

    return (
        <ul className='accordion' ref={accordionRef}>
            {data.map(({ id, title, content }) => {
                return (
                    <li key={id} className='accordion-item'>
                        <header className='accordion-item-header' onClick={handleClick}>
                            <h4>{title}</h4>
                            <span></span>
                        </header>
                        <div className='accordion-item-content'>
                            <article dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Accordion;
