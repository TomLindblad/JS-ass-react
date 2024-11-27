import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ColourPicker from './Pages/ColourPicker.jsx';
import ToDoList from './Pages/ToDoList.jsx';
import Books from "./Pages/Books.jsx";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/colourPicker" element={<ColourPicker/>}/>
          <Route path="/toDo" element={<ToDoList/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
