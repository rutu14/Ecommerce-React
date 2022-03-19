import Mockman from 'mockman-js';
import { Route, Routes } from 'react-router';
import './App.css';
import { CategorySection, Navigation } from './components/index';
import { CartPage, LandingPage, LoginPage, ProductPage, SignUpPage, WishlistPage } from './pages';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route index element={<LandingPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='wishlist' element={<WishlistPage/>}/>
        <Route path='product' element={<ProductPage/>}/>
        <Route path='product/:category' element={<ProductPage/>}/>
        <Route path='*' element={<LandingPage/>}/>
        <Route path='mock' element={<Mockman/>}/>
      </Routes>
    </>
  );
}

export default App;
