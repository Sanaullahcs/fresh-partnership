import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "../Assets/styles/FAQ.css";
import ApplyIcon from "../Assets/images/solar_phone-bold.svg"; 
import ApplyIcontwo from "../Assets/images/teenyicons_envelope-solid.svg"; 

const ContactUs = () => {
  useEffect(() => {
    // Load Typeform script dynamically
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="contact-container" id="contact">
      <Grid container spacing={4}>
        {/* Left Section: Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className="contact-title">
            CONTACT US
          </Typography>
          <Typography variant="body1" className="contact-description">
            Interested in partnering with Fresh Properties? Fill out the form and let's connect!
          </Typography>
          <div className="contact-row">
            <img src={ApplyIcon} alt="Phone Icon" className="apply-icon-two"    
 />
            
            {/* Netherlands Contact */}
            <img 
              src="https://flagcdn.com/w40/nl.png" 
              alt="Netherlands Flag" 
              style={{ width: "20px", marginRight: "10px" }} 
            />
            <a href="tel:+31623700433" className="contact-description">
              +31 6 23700433
            </a>

            {" | "}

            {/* Spain Contact */}
            <img 
              src="https://flagcdn.com/w40/es.png" 
              alt="Spain Flag" 
              style={{ width: "20px", marginRight: "10px", marginLeft: "10px" }} 
            />
            <a href="tel:+34744749203" className="contact-description">
              +34 744 74 92 03
            </a>
          </div>

          <div className="contact-row">
            <img src={ApplyIcontwo} alt="Email Icon" className="apply-icon-two" />
            <a href="mailto:info@fresh-propertymanagement.com" className="contact-description">
              info@fresh-propertymanagement.com
            </a>
          </div>
        </Grid>

        {/* Right Section: Full-width Typeform Embed */}
        <Grid item xs={12} md={6} className="contact-right">
          <div className="typeform-embed">
            <div data-tf-live="01JN6HD73YKK7F8JCRDQCFX5MP"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
