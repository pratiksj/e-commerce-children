

import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import { Footer } from './Components/Footer/Footer'
import { Banner } from './Components/Banner/Banner'



function App() {
  

  return (
   <div>
    <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path ="/" element={<Shop/>}/>
     <Route path ="/men" element={<div><ShopCategory category="Social skill"/> <Banner category="Social Skill learning"/></div>}/>
     <Route path ="/women" element={<div><ShopCategory category="Sensory"/><Banner category="Sensory"/></div>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path=':productId' element={<Product/>}/>
     <Route path ="/cart" element={<Cart/>}/>
     <Route path ="/login" element={<LoginSignup/>}/>
  </Routes>
  <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
