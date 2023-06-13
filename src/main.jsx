import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

import './index.css'
import Products from './components/Products/Products'
import Provider from './context/Provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
    </Provider>
    </>
  </React.StrictMode>,
)
