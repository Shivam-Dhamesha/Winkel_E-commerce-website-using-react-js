import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from './productdata';
import './slide.css'
import { NavLink } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

const Slide = ({title}) => {
  return (
    <div className='product_section'>
        <div className='product_deal'>
            <h2>{title}</h2>
           <NavLink to="/view"><button className='view_btn'>View All</button></NavLink>
        </div>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        className='slide'
        >
          {
            products.map((e)=>{
              if((e.tagline)===title){return(
                <div className='product_item'>
                  <div>
                    <img className='product_img' src={e.url} alt=''/>
                  </div>
                  <p className='products_name'>{e.title.longTitle}</p>
                  <p className='product_cost'> &#x20B9;{e.price.cost}/-</p>
                </div>
              
              )}
            })
          }


        </Carousel>

    </div>
  )
}

export default Slide