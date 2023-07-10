import React from 'react'
import {Link} from 'react-router-dom'
const navigation= [
  {name: 'Home',
  path: '/'
},
{name: 'Product',
  path: '/products'
},
{name: 'About',
  path: '/about'
},{name: 'Contact',
path: '/contact'
},
]
const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg fixed " style={{
    background: '#fff',
    width:'100%',
    zIndex:'100'
    }
}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg"  zoomAndPan="magnify" className='w-10 h-10'
      viewBox="0 0 375 374.9999"  preserveAspectRatio="xMidYMid meet" version="1.0"><defs>
        <path id="pathAttribute" d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 " fill="blue">
          </path></defs><g>
            <path id="pathAttribute" d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 " fill-opacity="1" fill-rule="nonzero" fill="blue">
              </path></g><g id="inner-icon" transform="translate(85, 75)"> <svg xmlns="http://www.w3.org/2000/svg" width="199.8" height="199.8" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute" fill="#ffffff">
                </path> </svg> </g></svg>
      <span className="ml-3 text-xl">My Eshop</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      {
        navigation.map((navigation)=>{
          return(
            <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
          )
        })
      }
      
    </nav>
    <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
  )
}

export default Header