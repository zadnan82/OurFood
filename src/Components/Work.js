import React from 'react'
import "../assets/css/main.css"
import menuItem from "../assets/img/gallery/gallery-5.jpg"
import menuItem2 from "../assets/img/about-2.jpg"
import menuItem3 from "../assets/img/gallery/gallery-8.jpg"

const Work = () => {
  return (
    <section id="work" className="chefs section-bg">
    <div className="container" data-aos="fade-up">
        <div className="section-header">
            <h2>Our Work</h2>
            <p>Our <span>Proffesional</span> Delivery</p>
        </div>

        <div className="row gy-4">
            <div className="col-lg-4 col-md-6 align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="chef-member">
                    <div className="member-img">
                        <img src={menuItem} className="img-fluid" />
                    </div>
                    <div className="member-info">
                        <h4>Choose Your Meal</h4>
                        <span>Anything you'd like</span>
                        <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6  align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="chef-member">
                    <div className="member-img">
                        <img src={menuItem2} className="img-fluid" />
                    </div>
                    <div className="member-info">
                        <h4>Customize Your Order</h4>
                        <span>Give chef a challenge</span>
                        <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 align-items-stretch " data-aos="fade-up" data-aos-delay="300">
                <div className="chef-member">
                    <div className="member-img">
                        <img src={menuItem3} className="img-fluid" />
                        <div className='social-media'>

                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Wait for Deliciusness to arrive</h4>
                        <span>Here in no time</span>
                        <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Work