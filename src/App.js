import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/main/Header';
import Hero from './components/views/Hero';
import About from './components/main/About';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
     </div>

  );
}



export default App;
