import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import HeaderContainer from './components/header/HeaderContainer'
import DailyDeals from './views/DailyDeals'
import Deal from './components/common/Deal'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Modal from './components/common/Modal'

function App() {
  return (
    <>
      <HeaderContainer />

      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="daily" element={<DailyDeals />} />
        <Route path="daily/:id" element={<Deal />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </>
  )
}

export default App
