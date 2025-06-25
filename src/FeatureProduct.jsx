import { useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus, ChevronDown } from 'lucide-react';
import { LucideArrowRight  } from "lucide-react";
import { MdMargin } from 'react-icons/md';

const FeatureProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('box-5');
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  // Hardcoded product data
  const product = {
    title: "The Smart Products which Feels Smooth & Clean",
    price: 599,
    originalPrice: 630,
    images: [
      "/../public/assets/trend_products/prod-1.jpg",
      "../public/assets/trend_products/prod-2.jpg",
      "../public/assets/trend_products/prod-3.jpg",
      "../public/assets/trend_products/prod-4.jpg",
      "../public/assets/trend_products/prod-1.jpg",
      "../public/assets/trend_products/prod-2.jpg"

    ],
    thumbnails: [
      "../public/assets/trend_products/prod-1.jpg",
      "../public/assets/trend_products/prod-2.jpg",
      "../public/assets/trend_products/prod-3.jpg",
      "../public/assets/trend_products/prod-4.jpg",
      "../public/assets/trend_products/prod-1.jpg",
      "../public/assets/trend_products/prod-2.jpg"
    ],
    // sizes: [
    //   { name: "box-5", label: "Box of 5 Snacks" },
    //   { name: "box-10", label: "Box of 10 Snacks" }
    // ],
    description: "SPF 60, UVA/UVB, Blue Light, IR, Pollution Protection. 100% Mineral sunscreen with Vitamin C, Hyaluronic acid and Niacinamide "
  };

  const changeImage = (newIndex) => {
    if (newIndex === selectedImage) return;

    setImageLoading(true);
    setTimeout(() => {
      setSelectedImage(newIndex);
      setImageLoading(false);
    }, 150);
  };

  const nextImage = () => {
    const newIndex = (selectedImage + 1) % product.images.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (selectedImage - 1 + product.images.length) % product.images.length;
    changeImage(newIndex);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Custom CSS styles for smooth transitions
  const imageContainerStyle = {
    background: 'linear-gradient(135deg, #fed7aa 0%, #fef3c7 100%)',
    overflow: 'hidden'
  };

  const imageStyle = {
    objectFit: 'cover',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: imageLoading ? 'scale(1.05)' : 'scale(1)',
    opacity: imageLoading ? 0.7 : 1,
    filter: imageLoading ? 'blur(2px)' : 'blur(0px)',
    maxHeight: 600
  };

  const thumbnailStyle = (index) => ({
    width: '80px',
    height: '80px',
    borderWidth: '2px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',
    boxShadow: selectedImage === index ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
  });

  const buttonStyle = {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    margin : '0 10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    transition : 'all 0.2s ease'
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left Side - Product Images */}
            <div className="col-lg-7 mb-4">
              {/* Main Image with Navigation */}
              <div
                className="position-relative rounded mb-3"
                style={imageContainerStyle}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-100 h-100 rounded"
                  style={imageStyle}
                />

                {/* Loading overlay */}
                {/* <div className="loading-overlay">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div> */}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="btn btn-light position-absolute smooth-button"
                  style={{
                    ...buttonStyle,
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  disabled={imageLoading}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="btn btn-light position-absolute smooth-button"
                  style={{
                    ...buttonStyle,
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  disabled={imageLoading}
                >
                  <ChevronRight size={24} />
                </button>



                {/* Image indicator dots */}
                <div
                  className="position-absolute d-flex justify-content-center w-100"
                  style={{ bottom: '15px' }}
                >
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeImage(index)}
                      className="btn p-0 mx-1"
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: selectedImage === index ? '#007bff' : 'rgba(255,255,255,0.5)',
                        border: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      disabled={imageLoading}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="d-flex overflow-auto pb-2 justify-content-center" style={{ gap: '10px' }}>
                {product.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => changeImage(index)}
                    className={`btn p-0 flex-shrink-0 thumbnail-hover ${selectedImage === index ? 'border-primary' : 'border-secondary'
                      }`}
                    style={thumbnailStyle(index)}
                    disabled={imageLoading}
                  >
                    <img
                      src={thumb}
                      alt={`Product view ${index + 1}`}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'all 0.3s ease' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div className="col-lg-5" style={{display: 'flex' , flexDirection: 'column', justifyContent: 'center'}}>
              <div>
                <h1 className="h2 mb-4">
                  {product.title}
                </h1>

                {/* Description Toggle */}
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className="btn btn-link text-left p-0 w-100 d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                  style={{ textDecoration: 'none', color: '#333' }}
                >
                  <span className="h5 font-weight-bold mb-0">Description</span>
                  <ChevronDown
                    size={20}
                    className={`text-muted chevron-rotate ${showDescription ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className="description-transition"
                  style={{
                    maxHeight: showDescription ? '200px' : '0px',
                    opacity: showDescription ? 1 : 0
                  }}
                >
                  <div className="text-muted mb-4" style={{ lineHeight: '1.6', padding: '0 0 16px 0' }}>
                    {product.description}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="h3 font-weight-bold text-dark mr-3">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="h5 text-muted">
                      <del>₹{product.originalPrice}</del>
                    </span>
                  )}
                </div>
                <p className="text-muted small mb-0">MRP Inclusive of all taxes</p>
              </div>

              {/* Size Selection */}
              {/* <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="font-weight-bold text-dark mr-2">Size:</span>
                  <span className="text-muted">{product.sizes.find(s => s.name === selectedSize)?.label}</span>
                </div>
                <div className="d-flex" style={{ gap: '8px' }}>
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`btn font-weight-medium ${selectedSize === size.name
                          ? 'btn-dark'
                          : 'btn-outline-secondary'
                        }`}
                      style={{
                        fontSize: '14px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Quantity */}
              <div className="mb-4">
                <div className="font-weight-bold text-dark mb-2">Quantity</div>
                <div className="d-flex align-items-center">
                  <div className="input-group" style={{ width: '140px' }}>
                    <div className="input-group-prepend">
                      <button
                        onClick={decrementQuantity}
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ transition: 'all 0.2s ease' }}
                      >
                        <Minus size={16} />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center font-weight-medium"
                      value={quantity}
                      readOnly
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    <div className="input-group-append">
                      <button
                        onClick={incrementQuantity}
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ transition: 'all 0.2s ease' }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 d-flex gap-3">

                <button type='button' class=" btn-custom-white px-4 py-2"> Add to Cart</button>
                 <button type='button' class=" btn-custom-black px-4 py-2"> Buy Now</button>
              {/* <button type="button" class="btn btn-success btn-lg" style={{ buttonStyle }} >Add to cart</button>
              
              <button type="button" class="btn btn-info btn-lg" style={{ buttonStyle }}>Buy It Now!</button> */}
              
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;