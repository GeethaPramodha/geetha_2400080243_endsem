import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
  "/images/project5.jpg",
  "/images/project6.jpg"
];

function Gallery() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="gallery-container">
      <h2>Student Project Gallery</h2>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="project"
            onClick={() => setModalImg(src)}
          />
        ))}
      </div>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="large" className="modal-img" />
        </div>
      )}
    </div>
  );
}

export default Gallery;

