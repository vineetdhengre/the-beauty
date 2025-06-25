import React from 'react'
import { GiMaterialsScience , GiLipstick } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

export default function AboutUs() {
    const bannerImage = "../assets/main-banner.jpg"
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center text-white rounded shadow p-4" style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px',
                    height: '500px',
                }}>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold">Inspiring Beauty</h1>
                        <p className="lead mb-4">
                            Beauty is a holistic skincare brand dedicated to simplifying skin-care
                            while promoting inner and outer well-being.
                        </p>
                        <a href="#shop" type="button" className=" btn-custom-white btn-lg fw-semibold px-3 py-2">
                            Shop Now
                        </a>
                    </div>

                </div>
            </div>
            <div className="container my-5">
                <div className="row bg-light rounded shadow p-4">
                    {/* Left Column: Image */}
                    <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0 pt-4" >
                        <img
                            src="../assets/about-image.jpg"
                            alt="Fresh Food"
                            className="img-fluid rounded"
                            style={{ maxHeight: "360px", objectFit: "cover", transform: "rotate(7deg)" }}
                        />

                    </div>

                    {/* Right Column: Text */}
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p className="display-5 fw-bold mb-3">Beauty Brand Story!</p>
                        <p className="mb-4">
                            In a world flooded with overwhelming skincare routines, confusing ingredient lists, and products that overpromise and underdeliver, AltBeauty was born out of a simple truth — skincare should be smart, not stressful. We saw the problem clearly :
                        </p>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">Too many products</li>
                            <li className="mb-2">Complicated skincare routines or regimens</li>
                            <li className="mb-2"> Products that don’t match real life — or real skin AltBeauty is the alternative. </li>
                        </ul>
                        <p className="mb-4">
                            In a world flooded with overwhelming skincare routines, confusing ingredient lists, and products that overpromise and underdeliver, AltBeauty was born out of a simple truth — skincare should be smart, not stressful. We saw the problem clearly :
                        </p>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">Too many products</li>
                            <li className="mb-2">Complicated skincare routines or regimens</li>
                            <li className="mb-2"> Products that don’t match real life — or real skin AltBeauty is the alternative. </li>
                        </ul>
                        <p className="mb-4">
                            <h5> But we go beyond skincare. </h5>
                            In a world flooded with overwhelming skincare routines, confusing ingredient lists, and products that overpromise and underdeliver, AltBeauty was born out of a simple truth — skincare should be smart, not stressful. We saw the problem clearly :
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-3 border-top">
                <div class="row">

                    <div class="col-md-3 border-end">
                        <h5 class="fw-bold mb-2 "> <GiMaterialsScience className='me-3'/>
                            Scientific Formulations</h5>
                        <p class="text-muted">Designed and formulated by dermatologist</p>
                    </div>


                    <div class="col-md-3 border-end">
                        <h5 class="fw-bold mb-2"> <GiLipstick className='me-3'/>
                            Derma Grade Quality</h5>
                        <p class="text-muted">Medical or derma grade quality products</p>
                    </div>


                    <div class="col-md-3 border-end">
                        <h5 class="fw-bold mb-2"> <RiSecurePaymentLine className='me-3'/>
                            Secure Payment</h5>
                        <p class="text-muted">Your payment information is processed securely</p>
                    </div>


                    <div class="col-md-3 ">
                        <h5 class="fw-bold mb-2"> <FaShippingFast className='me-3'/>
                            Fast Free Shipping</h5>
                        <p class="text-muted">Get free shipping on the orders above Rs 999</p>
                    </div>
                </div>
            </div>


        </>
    )
}
