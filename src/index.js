import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { CartProvider, CategoryProvider, ProductProvider, UserProvider, WishlistProvider  } from './context';
import { FilterProvider } from './context/filterContext';

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
