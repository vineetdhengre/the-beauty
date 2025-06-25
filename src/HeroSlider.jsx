import React from "react";
import Slider from "react-slick";

function Arrow({className, style, onClick, direction}) {
  return (
    <button
      className={className + ' d-none d-md-flex align-items-center justify-content-center'}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        [direction === 'left' ? 'left' : 'right']: 24,
        transform: 'translateY(-50%)',
        width: 46,
        height: 46,
        background: 'rgba(255,255,255,0.84)',
        border: 'none',
        borderRadius: '50%',
        zIndex: 12,
        boxShadow: '0 1.5px 6px 1.2px rgba(80,80,80,0.08)',
        cursor: 'pointer'
      }}
      onClick={onClick}
      aria-label={direction + ' arrow'}
      tabIndex={0}
    >
      {/* Chevron SVG */}
      {direction === 'left' ? (
        <svg width="19" height="34" stroke="#181717" strokeWidth="2.7" fill="none" viewBox="0 0 18 34"><polyline points="16,2 2.5,17 16,32"/></svg>
      ) : (
        <svg width="19" height="34" stroke="#181717" strokeWidth="2.7" fill="none" viewBox="0 0 18 34"><polyline points="2,2 15.5,17 2,32"/></svg>
      )}
    </button>
  );
}

function SlidePanel({image, headline, plus}) {
  return (
    <section
      className="w-100 hero-slider-section p-0 m-0"
      style={{ minHeight: 430, height: 580, background: '#fff', borderRadius: 0, overflow: 'hidden', position: 'relative' }}>
      {/* Full background image */}
      <img src={image} alt="slide main" style={{width:'100%', height:'100%', objectFit:'cover', position:'absolute', left:0, top:0, zIndex:1}} />
      {/* Headline overlay at bottom left */}
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        minWidth:250,
        maxWidth:'90vw',
        padding: '32px 48px 38px 48px',
        zIndex: 4,
        color: '#532881',
        background: 'linear-gradient(90deg, #fff 85%, #fff0 100%)',
        borderTopRightRadius: 30,
        boxShadow: '0 2px 36px 2px rgba(80,80,80,0.06)'
      }} className="d-flex flex-column align-items-start justify-content-end">
        {/* Arc + plus */}
        <div style={{position:'relative',width:170,height:80,marginBottom:-16}}>
          <svg width={140} height={72} viewBox="0 0 140 72" style={{position:'absolute', bottom:4, left:0}}>
            <path d="M16,60A56,56 0 1,1 124,60" stroke="#a259bb66" strokeWidth="2.1" fill="none" />
            <circle cx="70" cy="58" r="3" fill="#a259bb" />
            <circle cx="28" cy="58" r="1.2" fill="#a259bb55" />
            <circle cx="112" cy="58" r="1.2" fill="#a259bb33" />
          </svg>
          <span style={{color:'#a259bb', fontWeight:700, fontSize:38, position:'absolute',top: -10, left:12, lineHeight:1.1, zIndex:2}}>+</span>
        </div>
        {/* Main headline */}
        <h2 className="font-weight-bold m-0" style={{fontSize:32, color:'#532881',lineHeight:1.13,letterSpacing:'-1.1px',paddingTop: '7px', }}>{headline}</h2>
      </div>
    </section>
  );
}

export default function MainSlider() {
  const slides = [
    {
      image: "../public/assets/mainBan-1.jpg",
      headline: (<>
        Smart and <span style={{fontFamily:'serif', fontStyle:'italic', color:'#a259bb'}}>Simplified Skincare</span><br/>
        <span style={{color:'#532881',fontFamily:'sans-serif'}}>for busy lives</span>
      </>),
      plus: '+',
    },
    {
      image: "../public/assets/mainBan-2.jpg",
      headline: (<>
        The <span style={{fontFamily:'serif',fontStyle:'italic',color:'#a259bb'}}>Dermatologist Designed</span><br/>
        multipurpose routine
      </>),
      plus: '+',
    },
    {
      image: "../public/assets/mainBan-3.jpg",
      headline: (<>
        Experience <span style={{fontFamily:'serif',fontStyle:'italic',color:'#a259bb'}}>All-in-One</span><br/>
        Radiance Skincare
      </>),
      plus: '+',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
    adaptiveHeight: false,
  };
  return (
    <div className="w-100 p-0 m-0" style={{background:'#fff',overflow:'hidden'}}>
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <SlidePanel key={i} {...slide}/>
        ))}
      </Slider>
    </div>
  );
}
