import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const logoUrl = "../assets/logo.png"; // alt+ beauty
  return (
    <footer className="bg-dark text-muted py-5 border-top mt-5">
      <div className="container text-light">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className='row'>
              {/* Logo & Copy */}
              <div className="col-md-3">
                <img src={logoUrl} height={90} alt="altBeauty logo" className="mb-2" />
                
              </div>

              {/* Quick Links */}
              <div className="col-md-3">
                <h6 >Quick Links</h6>
                <ul className="list-unstyled">
                  <li><Link to="/product" className="text-reset text-decoration-none">Product</Link></li>
                  <li><Link to="/about" className="text-reset text-decoration-none">About</Link></li>
                  <li><Link to="/blogs" className="text-reset text-decoration-none">Blogs</Link></li>
                </ul>
              </div>

              {/* Policies */}
              <div className="col-md-3">
                <h6 >Policies</h6>
                <ul className="list-unstyled">
                  <li>
                    <button type="button" className="btn btn-link text-reset text-decoration-none p-0">Return Policy</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-link text-reset text-decoration-none p-0">Privacy Policy</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-link text-reset text-decoration-none p-0">Shipping Policy</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className='col-md-6'>
            <p class="h1">Stay in the loop with our weekly newsletter</p>
              
                  <form class="form">
                    <input type="email" class="form__field" placeholder="Your E-Mail Address" />
                    <button type="button" class="btn btn--inside uppercase" style={{ backgroundColor: '#484949' , color: 'white'}}>Send</button>
                  </form>
            
          </div>
        </div>
        
      </div>
      {/* <div className='container text-left'>
          <p className="mt-4 mb-0">
            &copy; {new Date().getFullYear()} altBeauty. All rights reserved.
          </p>
        </div> */}
      
    </footer>
  );
}
