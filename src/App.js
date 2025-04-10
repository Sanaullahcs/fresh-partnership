import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Nav from './components/Nav'; // Import Nav component
import HomeSection from './components/HomeSection';
// import AboutSection from './components/AboutSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import HelpingSection from './components/HelpingSection';
import Cost from './components/Cost-Section';
import WhatsAppButton from './components/WhatsAppButton'; // Import WhatsApp button
import Carousel from './components/Carousel';
import FAQS from './components/FAQS';
import Contact from './components/Contact-us';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
        
          <Nav />
        

      <HomeSection />
      <Carousel/>
      {/* <AboutSection /> */}
      <OpportunitiesSection />
      <HelpingSection />
      <Cost />

      <FAQS />
      <Contact />
      <Footer />

      <WhatsAppButton />

    </div>
  );
}

export default App;
