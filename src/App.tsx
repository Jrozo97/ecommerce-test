import { useState } from 'react'
import './App.css'
import ListProduct from './components/ListProduct/ListProduct'
import SidebarCart from './components/SidebarCart/SidebarCart'
import { useCart } from './hooks/useCart'

function App() {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { addToCart, cart, removeFromCart } = useCart();



  const openSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  }

  return (
    <>
      <header className='p-4 bg-white flex w-full px-10 '>
        <h1 className='text-2xl font-bold'>Ecommerce</h1>
        <button className='ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition' onClick={openSidebar}>Cart</button>
      </header>
      <ListProduct addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />
      {isOpenSidebar && (
        <SidebarCart openSidebar={openSidebar} cart={cart} removeFromCart={removeFromCart} />
      )}
    </>
  )
}

export default App
