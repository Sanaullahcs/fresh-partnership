import React from 'react';
import { Link } from "react-scroll";

import { Grid, Button } from '@mui/material';

import '../Assets/styles/style.css'; 
import '../Assets/styles/FAQ.css'; 

import FreshPropertyLogo from '../Assets/images/Propertyfirst.png'; 

const FreshPropertySection = () => {
  return (
    <div className="main-container" id='home'>
      {/* First Section */}
      <Grid container className="property-section">
        {/* Left Text Section */}
        <Grid item xs={12} md={6} className="text-section">
          <div className="content-wrapper">
            <h1 className="text-section-heading">JOIN FRESH PROPERTY MANAGEMENT AS A PARTNER: YOUR PATH TO GROWTH AND SUCCESS</h1>
            <p>
            Capitalize on Spain’s booming short-term rental market with a proven business model, expert training, and full operational support.
            </p>
            <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">
  <Button variant="flat" className="cta-button">GET STARTED TODAY</Button>
</Link>
          </div>
        </Grid>

        {/* Right Image Section */}
        <Grid item xs={12} md={6} className="image-section">
          <img src={FreshPropertyLogo} alt="Fresh Property Logo" className="full-image-one" />
        </Grid>
        
      </Grid>

      {/* Second Section (Gallery) */}
     
    </div>
  );
};

export default FreshPropertySection;
