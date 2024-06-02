import React from 'react'
import "./slider.css"


function Slider(props) {
  
  return (
    <>
    
    <div className='myslider'>
<img src={props.idata} height="300px" width="100%" alt=".."/>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="sliders">
      <img src="image/pic1.webp" className="photo"  alt="..."/>
      <h2 className='txt'>Learn about the future explore our AI courses</h2>
      
    </div>
    <div className="carousel-item">
      <img src="image/pic2.webp" className="photo" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="image/pic3.webp" className="photo" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="image/pic4.webp" className="photo" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="image/pic5.webp" className="photo" alt="..."/>
    </div>
    
    
      
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
<form className="frm" role="search">
        <input className="form-control me-2" type="search" placeholder="Search your favourote course today" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    
    </>
   
  )
}

export default Slider