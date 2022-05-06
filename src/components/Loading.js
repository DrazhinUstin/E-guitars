import React from 'react';
import { ReactComponent as LoadingSVG } from '../assets/loading.svg';

const Loading = ({ section, className = 'page-100 grid-center' }) => {
    if (!section) {
        return <LoadingSVG style={{ margin: '4rem auto' }} />;
    }
    return (
        <section className={className}>
            <LoadingSVG />
        </section>
    );
};

export default Loading;
