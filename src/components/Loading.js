import React from 'react';
import { ReactComponent as LoadingSVG } from '../assets/loading.svg';

const Loading = ({ section }) => {
    if (!section) {
        return <LoadingSVG style={{ margin: '4rem auto' }} />;
    }
    return (
        <section className='page-100 grid-center'>
            <LoadingSVG />
        </section>
    );
};

export default Loading;
