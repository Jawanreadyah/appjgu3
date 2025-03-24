import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedSection from './components/FeaturedSection';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
// Import the NavBarDemo component
import { NavBarDemo } from './components/ui/navbar-demo';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        {/* Original Navbar - comment this out if you want to use only the tubelight navbar */}
        <Navbar />
        
        {/* New Tubelight Navbar - uncomment to use */}
        {/* <NavBarDemo /> */}
        
        <Routes>
          <Route path="/" element={
            <>
              <FeaturedSection />
              <EventList />
            </>
          } />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;