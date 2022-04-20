import React from 'react';
import { CrumbTrail, Accordion } from '../components';
import guitars from '../assets/guitars.jpg';
import { servicesData as services, faqData } from '../utils/data';

const AboutPage = () => {
    return (
        <>
            <CrumbTrail title='about' />
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>about us</h2>
                    <div></div>
                </div>
                <div className='about-us'>
                    <div className='about-us-image'>
                        <img src={guitars} alt='guitars' />
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
                        obcaecati cupiditate. Nobis debitis quidem molestias quos est libero beatae
                        laborum nisi! Praesentium recusandae accusamus distinctio mollitia fugit.
                        Cupiditate, accusantium architecto. Blanditiis rem, impedit harum sunt
                        commodi sequi consequatur quam, ut dignissimos voluptatem odit cumque
                        tempore repellat, necessitatibus cum? Facere libero laborum optio quos
                        asperiores fuga hic odio at, iure, saepe ullam ad expedita, totam
                        reprehenderit error quas tempora. Perspiciatis obcaecati optio nulla quas
                        voluptates eligendi.
                    </p>
                </div>
            </section>
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>our services</h2>
                    <div></div>
                </div>
                <div className='services'>
                    {services.map(({ id, icon, title, description }) => {
                        return (
                            <article key={id} className='services-item'>
                                <div>{icon}</div>
                                <h4>{title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: description }} />
                            </article>
                        );
                    })}
                </div>
            </section>
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>FAQ</h2>
                    <div></div>
                </div>
                <Accordion data={faqData} />
            </section>
        </>
    );
};

export default AboutPage;
