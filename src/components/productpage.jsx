import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Poduct1page = () => {
  const [products, setProducts] = useState([]);
    async function fetchData(){
      const url="https://api.escuelajs.co/api/v1/products";
      try{
        const res=await axios.get(url);
        console.log("res",res.data)
        const uniqueCategory=[...new Set(res.data.map(item=>item.category.name))];
        console.log("uniqueCategory",uniqueCategory)
        setProducts(res.data)
      }
      catch(err){
        console.log("error",err)
      }
  
    }
    useEffect(() => {
      fetchData();
    }, []);
  return (
    
     <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",margin:"20px"}}>
      {products.map((product)=>{
        return <div key={product.id}>
          <img style={{width:"100%"}} src={product.images} alt={product.title}/>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      })}
    </div>
  )
}

export default Poduct1page;