import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Books from "./Pages/Books.jsx";
import Navbar from './Navbar.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
