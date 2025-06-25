import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, oldPrice, image, link, gradient, badge, rating }) {
  return (
    <div
      className="d-flex flex-column w-100 h-100 fade-slide-in"
      style={{
        background: gradient,
        borderRadius: 28,
        overflow: "hidden",
        minHeight: 420,
        boxShadow: "0 4px 36px 2px rgba(45,40,70,0.09)",
        position: "relative",
      }}
    >
      {/* Badge */}
      <div style={{ position: "absolute", top: 18, left: 16, zIndex: 4 }}>
        <span style={{
          display: "inline-block",
          padding: "7px 18px",
          background: "#e73d6b",
          color: "#fff",
          borderRadius: 20,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: "-0.5px",
        }}>
          {badge}
        </span>
      </div>

      {/* Rating */}
      <div style={{ position: "absolute", top: 18, right: 16, zIndex: 4 }}>
        <span style={{
          background: "#fff",
          color: "#222",
          borderRadius: 22,
          padding: "6px 14px",
          fontWeight: 500,
          fontSize: 17,
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          boxShadow: "0 1px 5px 0 #0001",
        }}>
          <span style={{ color: "#f7b52c", fontSize: 18, marginRight: 3 }}>★</span>
          {rating}
        </span>
      </div>

      {/* Image */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ minHeight: 270 }}>
        <img src={image} alt={title} style={{ maxWidth: "86%", maxHeight: 305, objectFit: "contain" }} />
      </div>

      {/* Title & Price */}
      <div className="px-4 pt-2 pb-4 d-flex flex-column align-items-start bg-white"
        style={{ borderBottomLeftRadius: 28, borderBottomRightRadius: 28 }}>
        <div style={{ fontWeight: 700, fontSize: 24, color: "#131313", marginBottom: 6 }}>{title}</div>
        <div className="d-flex align-items-end gap-2">
          <div style={{ fontWeight: 700, color: "#df2944", fontSize: 18 }}>₹{price.toLocaleString("en-IN")}</div>
          <div style={{ fontWeight: 400, textDecoration: "line-through", color: "#adadad", fontSize: 16, marginBottom: 2 }}>
            ₹{oldPrice.toLocaleString("en-IN")}
          </div>
        </div>
        <Link to={link} className="btn btn-outline-dark btn-sm mt-2">View</Link>
      </div>
    </div>
  );
}
