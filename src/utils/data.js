import image_1 from '../assets/guitars.jpg';
import image_2 from '../assets/gibson.jpg';
import image_3 from '../assets/fender.jpg';
import image_4 from '../assets/epiphone.jpg';
import brand_image_1 from '../assets/brands/brand_gibson.gif';
import brand_image_2 from '../assets/brands/brand_esp.gif';
import brand_image_3 from '../assets/brands/brand_fender.gif';
import brand_image_4 from '../assets/brands/brand_epiphone.gif';
import brand_image_5 from '../assets/brands/brand_yamaha.gif';
import {
    MdSecurity,
    MdSupportAgent,
    MdEngineering,
    MdSavedSearch,
    MdLocalShipping,
    Md30Fps,
} from 'react-icons/md';

const heroData = [
    {
        id: '1',
        image: image_1,
        title: 'find your guitar',
    },
    {
        id: '2',
        image: image_2,
        title: 'we provide the best service',
    },
    {
        id: '3',
        image: image_3,
        title: 'best music instruments',
    },
    {
        id: '4',
        image: image_4,
        title: 'best guarantees',
    },
];

const brandsData = [
    {
        id: '1',
        image: brand_image_1,
        title: 'gibson',
    },
    {
        id: '2',
        image: brand_image_2,
        title: 'esp',
    },
    {
        id: '3',
        image: brand_image_3,
        title: 'fender',
    },
    {
        id: '4',
        image: brand_image_4,
        title: 'epiphone',
    },
    {
        id: '5',
        image: brand_image_5,
        title: 'yamaha',
    },
];

const servicesData = [
    {
        id: '1',
        icon: <MdSecurity />,
        title: 'free 2-year warranty',
        description: 'Buy with confidence.',
    },
    {
        id: '2',
        icon: <MdSupportAgent />,
        title: 'free tech support',
        description: 'Got a question? <br /> We will help you with the answer.',
    },
    {
        id: '3',
        icon: <MdEngineering />,
        title: 'dedicated sales engineer',
        description: 'Helping you buy music gear with confidence.',
    },
    {
        id: '4',
        icon: <MdSavedSearch />,
        title: 'complete guitar inspection',
        description: 'Guitar perfection right out of the box.',
    },
    {
        id: '5',
        icon: <MdLocalShipping />,
        title: 'delivery is provided',
        description: 'Even on the small stuff.',
    },
    {
        id: '6',
        icon: <Md30Fps />,
        title: '30-day money-back',
        description: "Didn't like the product? <br /> You can return it.",
    },
];

const faqData = [
    {
        id: '1',
        title: 'how to make an order?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '2',
        title: 'how can i pay for my order?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '3',
        title: 'how will you ship my gear to me?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '4',
        title: 'what if i receive a defective product?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '5',
        title: 'what if the item i want is out of stock?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '6',
        title: 'how is working 30-day money-back?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
    {
        id: '7',
        title: 'what are the terms of the warranty?',
        content:
            '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta dicta perspiciatis delectus eligendi ipsum ad cum labore dignissimos similique, alias omnis in itaque voluptate incidunt sapiente excepturi voluptatum culpa vitae aut, quaerat odit dolores debitis minus. Consectetur itaque ullam quidem molestias nobis blanditiis enim, velit, dolor quisquam nihil ab.</p>',
    },
];

export { heroData, brandsData, servicesData, faqData };
