import React, { useState, useEffect } from 'react'
import test1 from "../assets/img/testimonials/testimonials-1.jpg";
import test2 from "../assets/img/testimonials/testimonials-2.jpg";
import test3 from "../assets/img/testimonials/testimonials-3.jpg";
import test4 from "../assets/img/testimonials/testimonials-4.jpg";
import "../assets/css/main.css"; 
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import 'swiper/css/bundle'; 

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} ${index === activeIndex ? 'swiper-pagination-bullet-active' : ''}"></span>`;
        },
      },
      on: {
        slideChange: () => {
          setActiveIndex(swiper.realIndex);
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section id="references" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            What Are They <span>Saying About Us</span>
          </p>
        </div>

        <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src={test1} class="img-fluid testimonial-img" alt=""/>
                  </div>
                </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i> Export tempor illum tamen malis malis
                          eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram
                          velit sunt aliqua noster fugiat irure amet legam anim culpa.{' '}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src={test2} className="img-fluid testimonial-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i> Enim nisi quem export duis labore cillum
                          quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis
                          noster aute amet eram fore quis sint minim.{' '}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src={test3} className="img-fluid testimonial-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i> Quis quorum aliqua sint quem legam fore
                          sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa
                          nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.{' '}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src={test4} className="img-fluid testimonial-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
