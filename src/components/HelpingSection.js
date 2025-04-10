import React from "react";
import { Grid } from "@mui/material";
import "../Assets/styles/style.css"; 

import SuccessImage from "../Assets/images/opp2.png"; 
import CheckIcon from "../Assets/images/plus-icon.svg";

const FreshIncomeStreams = () => {
  return (
    <div className="main-container" id="how-it-works">
      <Grid container className="property-section">
        {/* Left Image Section */}
        <Grid item xs={12} md={6} className="image-section" order={{ xs: 2, md: 1 }}>
          <img src={SuccessImage} alt="How Fresh Helps You Succeed"  className="full-image full-image-border" />
        </Grid>

        {/* Right Text Section */}
        <Grid item xs={12} md={6} className="text-section" order={{ xs: 1, md: 2 }}>
          <div className="content-wrapper-two">
            <h1 className="income-stream-headings">HOW FRESH HELPS YOU SUCCEED</h1>
            <h className="subheading-property">
              Dreaming of a new life in Spain? We make it easy to start and grow your own property management business, giving you the freedom to live and work on your terms.
            </h>

            {/* Success Features - No List Dots */}
            <div className="success-container">
              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span  className="income-stream-text">Proven Business Model</span> 
              </div>
              <span className="subheading-property"> Follow our step-by-step system to launch quickly and successfully.</span>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span  className="income-stream-text">Comprehensive Training</span> 
              </div>
              <span className="subheading-property"> Learn everything you need with our 1-to-1 training, no experience required.</span>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span  className="income-stream-text">Remote & Flexible Work</span> 
              </div>
              <span className="subheading-property"> Manage your business from anywhere.</span>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span  className="income-stream-text">Marketing & Lead Support</span> 
              </div>
              <span className="subheading-property">Automated tools and advertising to attract property owners, creating appointments straight into your CRM system.</span>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span  className="income-stream-text"> Marketing & Lead Support</span> 
              </div>
              <span className="subheading-property"> Automated tools and advertising to attract property owners, creating appointments straight into your CRM system.</span>

            </div>

            <p className="closing-text">
              Start fresh, live free, and build your future in Spain with us!
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FreshIncomeStreams;
