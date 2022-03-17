import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';
import './App.css';
import { Navigation } from './components/index';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/mock' element={<MockmanEs/>}/>
      </Routes>
    </>
  );
}

export default App;
