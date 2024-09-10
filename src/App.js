import React from 'react';
import Navbar from './components/Navbar';
import { MobileHandlerProvider } from './context/MobileHandler';
import Banner from './components/Banner';
import { BrowserRouter } from 'react-router-dom';
import MostVisited from './components/MostVisited';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MobileHandlerProvider>
        <Navbar />
        <Banner />
        <MostVisited />
        <Footer />
      </MobileHandlerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
