import React from 'react';
import Footer from './components/Footer';
import Graphs from './components/Graphs';
import Mainbody from './components/Mainbody';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainbody />
      <Graphs />
      <Footer />
    </div>
  )
}

export default App