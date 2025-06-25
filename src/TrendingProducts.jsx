import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function TrendingProducts() {
    const tabs = [
        { label: "Serum" },
        { label: "Day Cream" },
        { label: "Night Cream" },
        { label: "Skin Cleanser" },
    ];

    const serumProducts = [
        {
            name: "Acne Serum",
            image: "../public/assets/trend_products/prod-1.jpg",
            gradient: "linear-gradient(120deg, #aae0e1 0%, #d2f0e9 100%)",
            badge: "Save 9%",
            rating: 3.7,
            price: 990,
            oldPrice: 1090,
        },
        {
            name: "Advanced Antiaging Serum",
            image: "../public/assets/trend_products/prod-2.jpg",
            gradient: "linear-gradient(120deg, #d1eed2 0%, #b6e2ad 100%)",
            badge: "Save 5%",
            rating: 4.7,
            price: 1790,
            oldPrice: 1890,
        },
        {
            name: "Brightening Serum",
            image: "../public/assets/trend_products/prod-3.jpg",
            gradient: "linear-gradient(120deg, #ffe4ca 0%, #ffd3c7 100%)",
            badge: "Save 15%",
            rating: 4.8,
            price: 1099,
            oldPrice: 1299,
        },
        {
            name: "Super Shield BB Serum",
            image: "../public/assets/trend_products/prod-4.jpg",
            gradient: "linear-gradient(120deg,#f9cae8 0%,#fcdbee 100%)",
            badge: "Save 14%",
            rating: 4.7,
            price: 599,
            oldPrice: 699,
        },
    ];

    const [activeTab, setActiveTab] = useState("Serum");

    const tabToIndex = {
        Serum: 0,
        "Day Cream": 1,
        "Night Cream": 2,
        "Skin Cleanser": 3,
    };

    const cardIndex = tabToIndex[activeTab];
    const visibleProds = [serumProducts[cardIndex]];

    return (
        <section className="pt-4 pb-5 bg-white">
            <div className="container">
                <h2 className="fw-bold display-5 mb-4">Trending Product Collection</h2>

                {/* Tabs */}
                <div className="mb-4 d-flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            className="btn"
                            style={{
                                borderRadius: 24,
                                fontWeight: 500,
                                fontSize: 20,
                                background: tab.label === activeTab ? "#19191c" : "#f5f6fa",
                                color: tab.label === activeTab ? "#fff" : "#222",
                                boxShadow:
                                    tab.label === activeTab
                                        ? "0 2px 8px 2px rgba(0,0,0,0.06)"
                                        : "none",
                                minWidth: 110,
                            }}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-4 pb-2">
                    {visibleProds.map((prod) => (
                        <div
                            key={prod.name}
                            className="flex-shrink-0"
                            style={{ minWidth: 340, maxWidth: 420 }}
                        >
                            <ProductCard
                                title={prod.name}
                                price={prod.price}
                                oldPrice={prod.oldPrice}
                                image={prod.image}
                                badge={prod.badge}
                                rating={prod.rating}
                                gradient={prod.gradient}
                                link="/product-detail"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
