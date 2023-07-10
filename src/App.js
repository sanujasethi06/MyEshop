
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import {  Routes, Route, } from 'react-router-dom'
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProduct from './modules/CategoryProducts';
import Cart from './components/Cart';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/products/products/:id' element={<Product/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/categories/:name' element={<CategoryProduct/>}/>
      <Route path='/categories/:name/products/:id' element={<Product/>}/>
      
      <Route path='/cart' element={<Cart/>}/>


      
    </Routes>
    
    <Footer/>
    
    </>
  );
}

export default App;
