
import React from "react"

export default function(){

    return(
<>
<div className="container text-center">
<div className="row">
  <div className="col-sm-12 col-md-6">
    <div className="mb-4">
      <div className="card">
        <div className="card-body fs-5" style={{ textAlign: "justify" }}>
          Welcome to SmartWaste Solutions, the hub of innovative garbage
          management solutions for smart cities. With our cutting-edge
          technology and expertise, we provide comprehensive solutions to
          optimize waste collection, segregation, and recycling processes.
          Our goal is to create a cleaner and more sustainable future by
          leveraging the power of data and automation. By implementing our
          garbage management system, smart cities can reduce operational
          costs, enhance efficiency, and minimize environmental impact. Join
          us on this journey towards a cleaner and smarter future, where
          waste management becomes a seamless part of urban life.
        </div>
      </div>
    </div>
  </div>
  {/* Image carousel */}
  <div className="col-sm-12 col-md-6">
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="421r.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="121r.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="221r.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="321r.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</div>
<br />
<br />
</>)}