import React,{useState} from 'react'
import './shop.css';

const Productdisplay = () => {
  const [category,setCategory] = useState("All");
  const productlist=[ {
    id: 1,
    name: "Floral Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1299,
    instock: true,
    description: "Stylish floral crop top for casual outings.",
    rating: 4.5,
    colors: ["Pink", "White", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Off-Shoulder Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1499,
    instock: true,
    description: "Trendy off-shoulder crop top with elastic fit.",
    rating: 4.3,
    colors: ["Black", "Red", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "Ribbed Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 999,
    instock: true,
    description: "Ribbed cotton crop top with stretch fit.",
    rating: 4.4,
    colors: ["Beige", "Black", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Printed Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1399,
    instock: true,
    description: "Printed graphic crop top for casual fashion.",
    rating: 4.2,
    colors: ["White", "Blue", "Yellow"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Sleeveless Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1199,
    instock: true,
    description: "Sleeveless summer crop top with round neck.",
    rating: 4.1,
    colors: ["Pink", "White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "Knot Front Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1499,
    instock: true,
    description: "Trendy knot front crop top for parties.",
    rating: 4.6,
    colors: ["Red", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 7,
    name: "Long Sleeve Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=7200",
    category: "Crop Top",
    price: 1599,
    instock: true,
    description: "Full-sleeve fitted crop top for casual wear.",
    rating: 4.5,
    colors: ["Black", "White", "Maroon"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 8,
    name: "Wrap Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1699,
    instock: true,
    description: "Wrap design crop top with V-neck.",
    rating: 4.7,
    colors: ["Green", "Brown", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 9,
    name: "Halter Neck Crop Top",
    image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 1399,
    instock: true,
    description: "Stylish halter neck crop top for summer.",
    rating: 4.2,
    colors: ["Yellow", "Blue", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 10,
    name: "Basic Cotton Crop Top",
   image: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=720",
    category: "Crop Top",
    price: 899,
    instock: true,
    description: "Basic cotton crop top for everyday comfort.",
    rating: 4.0,
    colors: ["White", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
// ================= TOPS =================
{
  id: 11,
  name: "V-Neck Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1499,
  instock: true,
  description: "Elegant V-neck top for casual wear.",
  rating: 4.4,
  colors: ["Blue", "White", "Pink"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 12,
  name: "Bell Sleeve Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1699,
  instock: true,
  description: "Trendy bell sleeve top for outings.",
  rating: 4.3,
  colors: ["Yellow", "White", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 13,
  name: "Peplum Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1799,
  instock: true,
  description: "Fitted waist and flared peplum style top.",
  rating: 4.6,
  colors: ["Red", "Green", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 14,
  name: "Wrap Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1599,
  instock: true,
  description: "Chic wrap design top with tie detail.",
  rating: 4.2,
  colors: ["Maroon", "White", "Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 15,
  name: "Pleated Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1399,
  instock: true,
  description: "Lightweight pleated top for everyday wear.",
  rating: 4.1,
  colors: ["Beige", "Pink", "Olive"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 16,
  name: "Ruffle Sleeve Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1699,
  instock: true,
  description: "Ruffled sleeves add charm to this chic top.",
  rating: 4.5,
  colors: ["White", "Yellow", "Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 17,
  name: "High Neck Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1499,
  instock: true,
  description: "Solid high neck top with slim fit.",
  rating: 4.3,
  colors: ["Black", "Grey", "Red"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 18,
  name: "Cold Shoulder Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1599,
  instock: true,
  description: "Trendy cold-shoulder top with soft fabric.",
  rating: 4.2,
  colors: ["Pink", "White", "Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 19,
  name: "Smocked Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
  category: "T-shirt",
  price: 1799,
  instock: true,
  description: "Fitted smocked style top for chic look.",
  rating: 4.4,
  colors: ["Green", "Yellow", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 20,
  name: "Basic Cotton Top",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=17424796510",
  category: "T-shirt",
  price: 1199,
  instock: true,
  description: "Soft cotton top for everyday comfort.",
  rating: 4.0,
  colors: ["White", "Black", "Navy Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
// ================= JEANS =================
{
  id: 21,
  name: "Skinny Fit Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2299,
  instock: true,
  description: "Classic skinny fit jeans with stretch comfort.",
  rating: 4.5,
  colors: ["Blue", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 22,
  name: "High-Waist Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2499,
  instock: true,
  description: "Trendy high-waist jeans with snug fit.",
  rating: 4.6,
  colors: ["Light Blue", "Grey"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 23,
  name: "Mom Fit Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2399,
  instock: true,
  description: "Relaxed mom fit jeans with vintage look.",
  rating: 4.3,
  colors: ["Blue", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 24,
  name: "Ripped Denim Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2599,
  instock: true,
  description: "Trendy ripped denim jeans for casual style.",
  rating: 4.4,
  colors: ["Blue", "Dark Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 25,
  name: "Straight Fit Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2199,
  instock: true,
  description: "Comfortable straight fit jeans for everyday wear.",
  rating: 4.2,
  colors: ["Black", "Grey"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 26,
  name: "Bootcut Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2699,
  instock: true,
  description: "Stylish bootcut jeans for a retro look.",
  rating: 4.3,
  colors: ["Blue", "Dark Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 27,
  name: "Wide Leg Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 2799,
  instock: true,
  description: "Relaxed wide-leg jeans for chic styling.",
  rating: 4.5,
  colors: ["Blue", "Beige"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 28,
  name: "Cropped Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=720",
  category: "Jeans",
  price: 1999,
  instock: true,
  description: "Trendy cropped jeans perfect for summer.",
  rating: 4.1,
  colors: ["Blue", "Light Blue"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 29,
  name: "Boyfriend Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&width=7200",
  category: "Jeans",
  price: 2399,
  instock: true,
  description: "Loose boyfriend jeans for relaxed comfort.",
  rating: 4.4,
  colors: ["Blue", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 30,
  name: "Low Rise Jeans",
  image: "https://demo-milano.myshopify.com/cdn/shop/products/jeans10.jpg?v=1743049581&width=550",
  category: "Jeans",
  price: 2299,
  instock: true,
  description: "Trendy low-rise jeans with slim fit.",
  rating: 4.2,
  colors: ["Dark Blue", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
// ================= COATS =================
{
  id: 31,
  name: "Long Trench Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4299,
  instock: true,
  description: "Classic long trench coat with belted waist.",
  rating: 4.6,
  colors: ["Beige", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 32,
  name: "Wool Blend Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4599,
  instock: true,
  description: "Warm wool blend coat for winter elegance.",
  rating: 4.7,
  colors: ["Grey", "Camel"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 33,
  name: "Double Breasted Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4799,
  instock: true,
  description: "Stylish double-breasted coat with modern fit.",
  rating: 4.5,
  colors: ["Navy", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 34,
  name: "Cape Style Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 3999,
  instock: true,
  description: "Unique cape-style coat for a bold look.",
  rating: 4.3,
  colors: ["Beige", "Red"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 35,
  name: "Faux Fur Collar Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4899,
  instock: true,
  description: "Elegant coat with detachable faux fur collar.",
  rating: 4.6,
  colors: ["Black", "Brown"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 36,
  name: "Puffer Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 3799,
  instock: true,
  description: "Lightweight puffer coat with insulated lining.",
  rating: 4.4,
  colors: ["Olive", "Navy"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 37,
  name: "Peacoat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4499,
  instock: true,
  description: "Classic peacoat with double-breasted closure.",
  rating: 4.5,
  colors: ["Navy", "Grey"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 38,
  name: "Wrap Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4199,
  instock: true,
  description: "Chic wrap coat with tie belt detail.",
  rating: 4.4,
  colors: ["Beige", "White"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 39,
  name: "Plaid Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4699,
  instock: true,
  description: "Trendy plaid patterned coat for casual wear.",
  rating: 4.6,
  colors: ["Grey Plaid", "Brown Plaid"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 40,
  name: "Oversized Coat",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720",
  category: "Coat",
  price: 4599,
  instock: true,
  description: "Relaxed oversized coat for street style.",
  rating: 4.5,
  colors: ["Black", "Khaki"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
// ================= SWEATERS =================
{
  id: 41,
  name: "Cable Knit Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2299,
  instock: true,
  description: "Classic cable knit sweater with soft texture.",
  rating: 4.6,
  colors: ["Cream", "Grey"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 42,
  name: "Turtleneck Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2499,
  instock: true,
  description: "Warm turtleneck sweater for cozy winters.",
  rating: 4.7,
  colors: ["Black", "Beige"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 43,
  name: "Oversized Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2199,
  instock: true,
  description: "Relaxed oversized sweater for casual wear.",
  rating: 4.4,
  colors: ["Pink", "White"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 44,
  name: "V-Neck Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2399,
  instock: true,
  description: "Elegant v-neck sweater for layering.",
  rating: 4.5,
  colors: ["Navy", "Maroon"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 45,
  name: "Cardigan Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2599,
  instock: true,
  description: "Button-down cardigan sweater with pockets.",
  rating: 4.6,
  colors: ["Grey", "Black"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 46,
  name: "Chunky Knit Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2699,
  instock: true,
  description: "Chunky knit sweater with extra warmth.",
  rating: 4.5,
  colors: ["Olive", "Brown"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 47,
  name: "Striped Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2299,
  instock: true,
  description: "Trendy striped sweater with soft fabric.",
  rating: 4.3,
  colors: ["Black/White", "Blue/White"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 48,
  name: "Cropped Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2199,
  instock: true,
  description: "Fashionable cropped sweater for chic style.",
  rating: 4.4,
  colors: ["Lilac", "Beige"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 49,
  name: "Buttoned Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2499,
  instock: true,
  description: "Sweater with button detailing on the front.",
  rating: 4.5,
  colors: ["White", "Navy"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},
{
  id: 50,
  name: "Off-Shoulder Sweater",
  image: "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
  category: "Sweater",
  price: 2699,
  instock: true,
  description: "Chic off-shoulder sweater for a bold look.",
  rating: 4.6,
  colors: ["Black", "Red"],
  sizes: ["S", "M", "L", "XL", "XXL"]
},

];
const filteredProducts = category === "All"
  ? productlist
  : productlist.filter(product => product.category === category);
const [gridII, setGridII] = React.useState(false);
const [gridIII , setGridIII] = React.useState(false);
const [gridVI , setGridVI] = React.useState(true);
const [gridI,setGridI]=React.useState(false);
  return (
    <div className='product-display'>
      <div className='category'>
        <h2>Category: </h2>
        <button onClick={() => setCategory("All")}><h3>All</h3></button>
        <button onClick={() => setCategory(productlist[0].category)}><h3>{productlist[0].category}</h3></button>
        <button onClick={() => setCategory(productlist[10].category)}><h3>{productlist[10].category}</h3></button>
        <button onClick={() => setCategory(productlist[20].category)}><h3>{productlist[20].category}</h3></button>
        <button onClick={() => setCategory(productlist[30].category)}><h3>{productlist[30].category}</h3></button>
        <button onClick={() => setCategory(productlist[40].category)}><h3>{productlist[40].category}</h3></button>
      </div>
      <div className='product-display-right'>
      <nav className='product-display-nav'>
        <button onClick={() => setGridII(true) + setGridI(false) + setGridIII(false) +setGridVI(false)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none">
            <g fill="currentColor"><path d="M11.073 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.07 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM11.073 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.927 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></g>
          </svg></button>
          <button onClick={()=>setGridIII(true)+setGridI(false)+setGridII(false)+setGridVI(false)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none">
            <g fill="currentColor"><path d="M2.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></g>
          </svg></button>
          <button onClick={()=>setGridVI(true) + setGridI(false) + setGridII(false) + setGridIII(false)}>
            {console.log(gridVI)}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="none">
            <g fill="currentColor"><path d="M2.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></g>
          </svg></button>
          <button onClick={()=>setGridI(true) + setGridII(false) + setGridIII(false) + setGridVI(false)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="none">
            <g fill="currentColor"><path d="M2.073 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.073 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19.073 2a1 1 0 0 1-1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1ZM19.073 7a1 1 0 0 1-1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1ZM19.073 12a1 1 0 0 1-1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1Z"></path></g>
          </svg></button>
      </nav>
    <div className={`product-display-grid ${gridI ? 'product-display-gridI' : ''} ${gridII ? 'product-display-gridII' : ''} ${gridIII ? 'product-display-gridIII' : ''} ${gridVI ? 'product-display-gridVI' : ''}`}>
      {filteredProducts.map((products) => (
        <div key={products.id} >
          <img  className='product-display-image' src={products.image} alt={products.name} />
          <h3>{products.name}</h3>
          <p>{products.description}</p>
          <p>Price: ₹{products.price}</p>
          <p>Rating: {products.rating} ⭐</p>
          <p>Available Colors: {products.colors.join(", ")}</p>
          <p>Available Sizes: {products.sizes.join(", ")}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
    </div> 
    </div>
  )
}

export default Productdisplay