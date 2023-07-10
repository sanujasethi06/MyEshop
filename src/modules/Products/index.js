import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';


const Index = () => {
    const [products, setProducts] = React.useState([]);
useEffect(() => {
 const fetchProducts = async() =>{
  const response= await fetch('https://fakestoreapi.com/products')
  const data= await response.json()
  console.log(data)
  setProducts(data)
 }
  fetchProducts()
}, [])
   
  return (
    <div>
        <Categories/>
        <div>
        <h2 className="text-xs text-center text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-center text-xl text-bold font-medium title-font text-gray-900">ALL POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0?
        <ProductCard products={products}/>:<div>Loading...</div>
        
      }
    </div>
  )
}

export default Index
