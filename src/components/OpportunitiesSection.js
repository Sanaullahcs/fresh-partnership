import React from "react";
import { Grid } from "@mui/material";
import "../Assets/styles/style.css"; 


import ManagementIcon from "../Assets/images/opp1.png"; 
import PlusIcon from "../Assets/images/plus-icon.svg";  

const FreshIncomeStreams = () => {
  return (
    <div> 
      {/* Section Wrapper */}
   <div className="main-container" id="opportunities">
   <Grid container className="property-section">
        {/* Left Text Section */}
        <Grid item xs={12} md={6} className="text-section">
          <div className="content-wrapper">
            <h1 className="income-stream-headings" >STEADY INCOME STREAMS</h1>
            <div className="subheading-property" style={{ lineHeight: "30px" }}>
            The short-term rental market is growing rapidly, and demand for vacation homes in Spain continues to rise.
              As a FRESH Partner, you’ll benefit from multiple income streams, including:
            </div>

            {/* Income Streams List */}
            <ul className="income-streams">
  <li className="income-stream-item">
    <img src={PlusIcon} alt="Property Management" />
    <div className="margin-top-heading">
      <h className="subheading-property">
        <span className="income-stream-text">
          Property Management Revenue
        </span >
      </h>
      
    </div>
  </li>
<h className="subheading-property"> Earn a steady income by managing short-term rentals and providing a seamless experience for property owners.
</h>
  <li className="income-stream-item"  >
    <img src={PlusIcon} alt="Real Estate Referral" />
    <div className="margin-top-heading">
      <h className="subheading-property">
        <span className="income-stream-text">
          Real Estate Referral Income
        </span>
      </h>
    </div>
  </li>
  <h className="subheading-property">Connect property buyers with investment opportunities and earn commissions when deals close.

</h>
</ul>

          </div>
        </Grid>

        {/* Right Image Section */}
        <Grid item xs={12} md={6} className="image-section">
          <img src={ManagementIcon} alt="Fresh Property Logo"  className="full-image full-image-border" />
        </Grid>
      </Grid>
   </div>


   
    </div>




  );
};

export default FreshIncomeStreams;
