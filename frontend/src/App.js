import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Card from './Pages/Card'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCategory category="Men" />} />
          <Route path="/Women" element={<ShopCategory category="Women" y />} />
          <Route path="/kids" element={<ShopCategory category="Kids" />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Card />} />
          <Route path="/login" element={<LoginSignup />} />

        </Routes>

      </BrowserRouter>
      <Shop />

    </div>
  )
}

export default App