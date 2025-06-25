import React from 'react'
import { Link } from 'react-router-dom'
import { LucideSearch, LucideUser, LucideShoppingCart } from 'lucide-react';
import './App.css'
import { CgProfile } from 'react-icons/cg';
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";


export default function Header() {

  const logoUrl = "../public/assets/logo.png"; // alt+ beauty

  return (
    <>
      <div className="bg-white border-bottom" style={{ boxShadow: 'none' }}>
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">

      {/* Logo - Visible on lg and up */}
      <a className="navbar-brand d-none d-lg-block" href="/">
        <img src={logoUrl} alt="Logo" className="logo-img" />
      </a>

      {/* Toggler for mobile */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">

        <div className="d-flex flex-grow-1 justify-content-between align-items-center flex-wrap w-100">

          {/* Center Navigation Links */}
          <ul className="navbar-nav flex-row flex-wrap justify-content-center mx-auto fs-5">
            <li className="nav-item px-2">
              <a className="nav-link" href="/">Shop</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Skin Concern</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">All Products</a>
            </li>
            <li className="nav-item px-2">
              <Link className='nav-link' to="/about-us "> About Us </Link>
              {/* <a className="nav-link" href="./AboutUs">About Us</a> */}
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Inner Beauty</a>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link" href="/offers">
                <CgProfile size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactUs">
                <IoSearch size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactUs">
                <LuShoppingCart size={25} />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
</div>

    </>
  )
}
