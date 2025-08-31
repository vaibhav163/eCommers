import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './shop.css';
import Productpage from './productpage';
// import Productdisplay from './productdisplay';
// import Navbar from './navbar';

const shop = () => {
const swiperproductlist=[
  {
    index: 1,
    name: "Blazer",
    imageUrl: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt10.jpg?v=1743049581&width=550"
  },
  {
    index: 2,
    name: "Denim",
    imageUrl: "https://demo-milano.myshopify.com/cdn/shop/collections/fsn_clt2.jpg?v=1742529975&width=550"
  },
  {index :3,
    name:"crop-top",
    imageUrl:"https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt2.jpg?v=1742530012&width=550"
  },
  {index :4,
    name:"sweaters",
    imageUrl:"https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt4.jpg?v=1743049703&width=550"
  },
  {index :5,
    name:"tshirt",
    imageUrl:"https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt3.jpg?v=1743049615&width=550"
  },
  {index :6,
    name:"tops",
    imageUrl:"https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt7.jpg?v=1743321745&width=550"
  },
  {index :7,
    name:"dress",
    imageUrl:"https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt6.jpg?v=1743321756&width=550"
  }
];

  return (
    <div>
        {/* <Navbar /> */}
            <img className='shop-banner'  src="https://demo-milano.myshopify.com/cdn/shop/files/img_cate1.jpg?v=1745919961&width=360"/>
            <div className='shop-banner-text'>
                <h2>Shop the Latest Trends</h2>
                <p>Discover the newest arrivals in our collection</p>
            </div>        <div className='shop-product-swiper'>
          <Swiper 
          spacebetween={20}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }}
          >
            {swiperproductlist.map((e)=>(
              <SwiperSlide key={e.index}>
                <img className='swiper-slide-image' src={e.imageUrl} alt={e.name} />
                <p className='swiper-slide-text'>{e.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <Productdisplay /> */}
        <Productpage />

    </div>
  )
}

export default shop;