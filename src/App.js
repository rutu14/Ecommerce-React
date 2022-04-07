import Mockman from 'mockman-js';
import { Route, Routes } from 'react-router';
import { Navigation } from './components';
import { CartPage, LandingPage, LoginPage, ProductPage, SignUpPage, WishlistPage } from './pages';
import { ToastContainer } from 'react-toastify';

function App() {
	const storedTheme = localStorage.getItem("theme");
  	
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='home' element={<LandingPage/>}/>
				<Route index element={<LandingPage/>}/>
				<Route path='login' element={<LoginPage/>}/>
				<Route path='signup' element={<SignUpPage/>}/>
				<Route path='cart' element={<CartPage/>}/>
				<Route path='wishlist' element={<WishlistPage/>}/>
				<Route path='product' element={<ProductPage/>}/>
				<Route path='product/:categoryName' element={<ProductPage/>}/>
				<Route path='*' element={<LandingPage/>}/>
				<Route path='mock' element={<Mockman/>}/>
			</Routes>
			<ToastContainer theme={storedTheme} position="bottom-center" autoClose={2000} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
		</>
  );
}

export default App;
