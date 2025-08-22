import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./HeroTab.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard.jsx';

// import { Navigation, Pagination } from 'swiper';

const HeroTab = () => {
  const items = {
    name: "Hign neckk jumper",
    price: 7999,
    description:
      "az",
    colors: [
      {
        name: "white",
        hex: "rgba(255, 255, 255, 1)",
        image: "https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512",
      },
      {
        name: "black",
        hex: "rgba(0, 0, 0, 1)",
        image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=480",
      },
      {
        name: "Green",
        hex: "#22c55e",
        image: "https://via.placeholder.com/400x300/22c55e/ffffff?text=Green+Shoe",
      },
    ],
  };
  return (
    <div className='hero-tab'>
      <Swiper
        // modules={[Navigation, Pagination]}
        // navigation
        // pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide style={{height: '80vh' , width: '100vw'}} className='hero-slide'>
          <a href='/'>
          <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s1.webp?v=1748226426&width=1500" alt="Slide 1" />
          <div style={{
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
  }}>
    <p className=''>MODERN EVERYDAY LOOKS</p>
    <h1>soft comfort</h1>
      <h1>bold looks</h1>
    <button>Shop Collection</button>
  </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className='hero-slide'>
          <a href='/'>
          <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s2.webp?v=1748226426&width=1920" alt="Slide 2" />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="shopbycategory">
        <h1 style={{textAlign:'center'}}>Shop by Category</h1>
        <p style={{textAlign:'center'}}>Explore our wide range of products</p>
        <div className='category-slider-container'>
      <div className='category-slider' >
        <a href='/'><img className='category-image'  src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972"/></a>
        <span className='category-name'>Category 1</span>
      </div>
      <div className='category-slider' >
        <a href='/'><img className='category-image'  src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972"/></a>
        <span className='category-name'>Category 2</span> 
      </div>
      <div className='category-slider' >
        <a href='/'><img className='category-image' 
         src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972"/></a>
        <span className='category-name'>Category 3</span>
      </div>
      <div className='category-slider'>
        <a href='/'><img className='category-image' 
        src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972"/></a>
        <span className='category-name'>Category 4</span>
      </div>
      <div className='category-slider'>
        <a href='/'><img className='category-image' 
        src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972"/></a>
        <span className='category-name'>Category 5</span>
      </div>
      <div className='category-slider'>
        <a href='/'><img className='category-image' 
        src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972"/></a>
        <span className='category-name'>Category 6</span>
      </div>
        </div>
      </div>
      <div className="herotab-banner">
        <a href='/'>
        <div className="herotab-banner-content">
          <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_1.webp?v=1748226426&width=1370" alt="Banner" />
          <div className='herotab-banner-text'>
          <h2>Welcome to Our Store</h2>
          <p>Discover the latest trends and collections</p>
          <button>Shop Now</button>
          </div>
        </div>
        </a>
        <a href='/'>
        <div className="herotab-banner-content">
          <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_2.webp?v=1748226426&width=1370" alt="Banner" />
        <div className='herotab-banner-text'>
          <h2>Welcome to Our Store</h2>
          <p>Discover the latest trends and collections</p>
          <button>Shop Now</button>
          </div>
        </div>
        </a>
      </div>
      <div className="herotab-bestselling">
        <h1>Bestselling Products</h1>
        <p>Unmatched design—superior performance and customer satisfaction in one.</p>
        <Swiper>
          <SwiperSlide><ProductCard product={items} /></SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default HeroTab;