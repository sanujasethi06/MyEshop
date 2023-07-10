import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import {useParams} from 'react-router-dom'
const CategoryProduct = () => {
    const {name}= useParams ()
    const [products, setProductss] = React.useState([]);
    useEffect(() => {
     const fetchProducts = async() =>{
      const response= await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data= await response.json()
      console.log(data)
      setProductss(data)
     }
     fetchProducts()
    }, [])
    if (products.length === 0) return <div>Loading...</div>
  return (
    <ProductCard products={products}/>
  )
}

export default CategoryProduct
