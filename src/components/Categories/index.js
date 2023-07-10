import React, { useEffect } from 'react'
import Feature from '../FeatureCard';


const Categories = () => {
    const [categories, setCategories] = React.useState([]);
    useEffect(() => {
     const fetchCategories = async() =>{
      const response= await fetch('https://fakestoreapi.com/products/categories')
      const data= await response.json()
      console.log(data)
      setCategories(data)
     }
      fetchCategories()
    }, [])
    if (categories.length === 0) return <div>Loading...</div>
      return (
        <div>
          <Feature cards={categories}/>
        </div>
      )
}

export default Categories
