import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { CategoryProvider } from './context/categoryContext';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <CategoryProvider>			 */}
				<App />			
			{/* </CategoryProvider>   */}
		</BrowserRouter>  
	</React.StrictMode>,
  document.getElementById('root')
);
