import React from 'react'
import Slider from "react-slick";

export default function BrandShowcase() {

    const seals = [
        {
            alt: "GMP",
            img: "https://www.thealtbeauty.com/cdn/shop/files/non_toxic.png?height=264&v=1720763848",
        },
        {
            alt: "FDA",
            img: "https://www.thealtbeauty.com/cdn/shop/files/FDA.png?height=264&v=1720763849",
        },
        {
            alt: "Gentle on Skin",
            img: "https://www.thealtbeauty.com/cdn/shop/files/Gentle_on_skin.png?height=264&v=1720763849",
        },
        {
            alt: "Paraben Free",
            img: "https://www.thealtbeauty.com/cdn/shop/files/paraben_free_4f04f355-ba69-40b7-9717-40aa52c055e0.png?height=264&v=1720763848",
        },
        {
            alt: "Non Toxic",
            img: "https://www.thealtbeauty.com/cdn/shop/files/non_toxic.png?height=264&v=1720763848",
        },
        {
            alt: "Not Tested on Animal",
            img: "https://www.thealtbeauty.com/cdn/shop/files/Cruelty_free_3f7cad53-e676-454e-ae61-5e0b7e8bdf87.png?height=264&v=1720763849",
        },
        {
            alt: "Dermatologist Formulated",
            img: "https://www.thealtbeauty.com/cdn/shop/files/dermat.png?height=264&v=1720763849",
        },
    ];

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <>
            <div>
                <section className="py-4 px-2" style={{ background: "#fff" }}>
                    <div className="container-fluid px-0 text-center">
                        <div style={{ fontSize: 22, marginTop: 10, color: '#232323', fontWeight: 400 }}>
                            Our commitment to your safety and priorities
                        </div>
                        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -2, color: '#181717', marginBottom: 30, lineHeight: 1 }}>
                            Clean Promise
                        </div>
                        <div style={{ marginLeft: -4, marginRight: -4 }}>
                            <Slider {...settings}>
                                {seals.map((seal) => (
                                    <div key={seal.alt} className="px-4 py-2">
                                        <img
                                            src={seal.img}
                                            alt={seal.alt}
                                            style={{ width: 130, height: 130, objectFit: 'contain', background: '#fff', borderRadius: '50%', margin: '0 auto' }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
