import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { CartProvider, CategoryProvider, ProductProvider, UserProvider, WishlistProvider, FilterProvider } from './context';
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
			<CartProvider>
			<WishlistProvider>
			<ProductProvider>
			<FilterProvider>			
			<CategoryProvider>
				<App />		
				</CategoryProvider>			
			</FilterProvider>
			</ProductProvider>
			</WishlistProvider>
			</CartProvider>
			</UserProvider>
		</BrowserRouter>  
	</React.StrictMode>,
  document.getElementById('root')
);
