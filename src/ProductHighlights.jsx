import React from 'react';
import { LucideArrowRight } from 'lucide-react';

const data = [
    {
        id: 1,
        title: 'All Products',
        subtitle: 'Check out all our products',
        image: '../assets/main-products.jpg',
        link: '/all-products',
    },
    {
        id: 2,
        title: 'Skincare Routine',
        subtitle: 'Simplified skincare routine',
        image: '../assets/skincare.jpg',
        link: '/skincare-routine',
    },
    {
        id: 3,
        title: 'Pigmentation',
        subtitle: 'Get rid of dark spots and pigmentation',
        image: '../assets/pigment.jpg',
        link: '/pigmentation',
    },
    {
        id: 4,
        title: 'Acne & Marks',
        subtitle: 'Get rid of acne, pimples & acne marks',
        image: '../assets/acne&marks.jpg',
        link: '/acne-marks',
    },
];

const ProductHighlights = () => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {data.map((item) => (
                    <div className="col-12 col-sm-6 col-md-3" key={item.id}>
                        <a href={item.link} className="text-decoration-none text-dark">
                            <div className={`card  shadow-sm border-0 hover-rotate-parent ${item.id === 1 ? 'custom-height-lg' : ''
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img-top"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="card-text text-muted">{item.subtitle}</p>
                                    <div className="mt-2 d-flex align-items-center">
                                        <LucideArrowRight
                                            size={20}
                                            className="transition-arrow-hover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductHighlights;
