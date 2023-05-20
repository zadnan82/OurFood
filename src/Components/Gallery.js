import React from 'react'
import "../assets/css/main.css";
import Hero1 from "../assets/img/gallery/gallery-1.jpg";  
import Hero2 from "../assets/img/gallery/gallery-2.jpg";  
import Hero3 from "../assets/img/gallery/gallery-3.jpg";  
import Hero4 from "../assets/img/gallery/gallery-4.jpg";  
import Hero5 from "../assets/img/gallery/gallery-5.jpg";  
import Hero6 from "../assets/img/gallery/gallery-6.jpg";  
import Hero7 from "../assets/img/gallery/gallery-7.jpg";  
import Hero8 from "../assets/img/gallery/gallery-8.jpg";  




const Gallery = () => {
  return (
    <section id="gallery" class="gallery section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>gallery</h2>
        <p>Check <span>Our Gallery</span></p>
      </div>

      <div class="gallery-slider swiper">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-1.jpg"><img src={Hero1} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-2.jpg"><img src={Hero2} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-3.jpg"><img src={Hero3} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-4.jpg"><img src={Hero4} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-5.jpg"><img src={Hero5} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-6.jpg"><img src={Hero6} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-7.jpg"><img src={Hero7} class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="../assets/img/gallery/gallery-8.jpg"><img src={Hero8} class="img-fluid" alt=""/></a></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </section>
  )
}

export default Gallery
