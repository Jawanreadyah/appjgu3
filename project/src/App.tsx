import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedSection from './components/FeaturedSection';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
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