import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import Products from './pages/Products';
import Login from './pages/Login';

function App() {
  const [textValue, setTextValue] = useState('');

  async function sampleFunction() {
    console.log(textValue);
    const response = await axios.post('http://localhost:8080/db', {
      textValue,
    });
    console.log(response);
  }
  const MainRoute: React.FunctionComponent = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );

  return (
    <>
      <MainRoute />
    </>
  );
}

export default App;
