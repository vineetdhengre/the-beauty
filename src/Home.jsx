import React from 'react'
import MainSlider from './HeroSlider'
import { LucideArrowRight } from 'lucide-react';
import ProductHighlights from './ProductHighlights';
import BrandShowcase from './BrandShowcase';
import TrendingProducts from './TrendingProducts';
import FeatureProduct from './FeatureProduct';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <div>
                <MainSlider />
            </div>
            <div>
                <div className="container py-5">
                    <div className="row align-items-center">

                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h1 className="display-4 font-weight-bold mb-2">Skincare Routine</h1>
                            <h2 className="display-4 font-weight-bold mb-4">Simplified!</h2>

                            {/* Decorative Bar */}
                            <div style={{ backgroundColor: '#FCD34D', height: '8px', width: '200px', marginBottom: '24px' }}></div>

                            {/* Button */}
                            <a href="#" className="btn btn-outline-dark rounded-pill d-inline-flex align-items-center">
                                <span>Our Mission</span>
                                <LucideArrowRight className="ml-2" size={16} />
                            </a>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-6">
                            <p className="lead mb-4">
                                AllBeauty simplifies skincare routine for busy individuals with dermatologist-designed, derma grade, multipurpose products that deliver effective, science-backed results. Our toxin-free formulations save you time by combining essential ingredients in one easy step, so you don't have to navigate the complexity of separate products.
                            </p>
                            <p className="lead">
                                Beyond skincare, our <strong>holistic approach</strong> nurtures both outer radiance and inner well-being, empowering you to feel confident and authentic from the inside out.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <ProductHighlights />
            </div>
            <div>
                <BrandShowcase />
            </div>
            <div>
                <TrendingProducts />
            </div>
            <div>
                    <div className="container-fluid mt-4 pt-3">
                        {/* <img src="assets\bowl-test.png" alt="Bowl" class="bowl-top-left" /> */}
                        <div className="hero-section-bottom">
                            <div className="tag">Best Choices</div>
                            <div className='gif-banner-section'>
                                <h1 className="card_title"> Simplify Your Daily Skincare Routine </h1>
                                <p className="subtitle"> With high quality all-in-one products range</p>
                                <button type="button" className="btn-custom-black " style={{ width: 200 , height : 50 }}>ORDER NOW</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                <FeatureProduct />
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </>


    )
}
