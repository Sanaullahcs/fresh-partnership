import React from "react";
import { Grid } from "@mui/material";
import "../Assets/styles/style.css";
import { Link } from "react-scroll";

// Importing Image & Icons
import SuccessImage from "../Assets/images/gallerysection1.png"; // Replace with the correct image path
import CheckIcon from "../Assets/images/plus-icon.svg"; // Update with actual path
import ApplyIcon from "../Assets/images/applyIcon.png"; // Update with actual path for Apply Now icon

const FreshIncomeStreams = () => {
  return (
    <div className="main-container " id="costs">
      <Grid container className="property-section">
        {/* Left Image Section */}
       

        {/* Right Text Section */}
        <Grid item xs={12} md={6} className="text-section-two">
          <div>
            <h1 className="income-stream-headings">WHAT ARE THE COSTS, <br></br>AND WHAT'S IN IT FOR ME?</h1>
            
            <h1  className="income-stream-investment-one">What’s the investment?</h1>
            <h1 className="subheading-property">
              Starting your own property management business with Fresh requires a manageable initial investment, which includes a partnership and training fee. We offer full transparency and a clear breakdown of costs, so you’ll know exactly where your investment is going.
            </h1>

            <h className="income-stream-investment-one">
              By partnering with Fresh, you’ll have access to:
            </h>

            {/* Success Features */}
            <div className="success-container">
              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span className="subheading-property"> A scalable business model that grows with your efforts and ambition.</span>
              </div>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span className="subheading-property">Comprehensive training and ongoing support to ensure your success.</span>
              </div>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span className="subheading-property"> Marketing resources & lead generation to attract property owners and guests.</span>
              </div>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span className="subheading-property">Remote management tools to run your business while on the go.</span>
              </div>

              <div className="success-item">
                <img src={CheckIcon} alt="Check" className="icon" />
                <span className="subheading-property">Unlimited earning potential as your business expands and thrives.</span>
              </div>
            </div>

            {/* Apply Now Section */}
            <div className="apply-now-section">
  <p className="income-stream-investment">Ready to take the next step?</p>
  <button className="custom-button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
    APPLY NOW
  </button>
</div>

          </div>
        </Grid>
        <Grid item xs={12} md={6} className="image-section">
          <img src={SuccessImage} alt="What are the costs and benefits?"  className="full-image full-image-border" />
          
        </Grid>
      </Grid>
    </div>
  );
};

export default FreshIncomeStreams;
