import Mockman from 'mockman-js';
import { Route, Routes } from 'react-router';
import './App.css';
import { CategorySection, Navigation } from './components/index';
import { CartPage, LandingPage, LoginPage, ProductPage, SignUpPage, WishlistPage } from './pages';
import { CartProvider, CategoryProvider, ProductProvider, UserProvider  } from './context';

function App() {
  return (
		<>
		<UserProvider>
			<CartProvider>
			<ProductProvider>
				<CategoryProvider>
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
				</CategoryProvider>
			</ProductProvider>
			</CartProvider>
		</UserProvider>
		</>

  );
}

export default App;
