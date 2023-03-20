import React from 'react'
import "./shop_all.css"
import { NavLink} from 'react-router-dom'
import { products } from '../home/productdata'

const Shop_all = () => {
    return (
      <>
      <div className='view_deal'>
            <h2>All products</h2>
        </div>
      <div className='view_section'>
            {
              products.map((e)=>{
                return(
                  <div className='view_item'>
                    <div>
                     <NavLink to="/getproductone"> <img className='view_img' src={e.url} alt=''/></NavLink>
                    </div>
                    <p className='view_name'>{e.title.longTitle}</p>
                    <p className='view_cost'> &#x20B9;{e.price.cost}/-</p>
                  </div>
                
                )
              })
            }
      </div>
      
      </>
    )
  }

export default Shop_all